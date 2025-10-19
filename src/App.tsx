import { useState, type FormEvent, type FC } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './components/form';
import { List } from './components/list';
import { type TFormData } from './components/types';
import './App.css';

export const App: FC = () => {
  const [inputsData, setInputsData] = useState<TFormData[]>([]);
  const [formKey, setFormKey] = useState(0);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const processedData: TFormData = {
      id: nanoid(),
      name: String(data.name) || '',
      price: Number(data.price) || 0,
    };
    if (editingId) {
      setInputsData((prev) => {
        return prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                name: String(data.name) || '',
                price: Number(data.price) || 0,
              }
            : item
        );
      });
      setEditingId(null);
    } else {
      setInputsData((prev) => [...prev, processedData]);
    }
    setFormKey((prev) => prev + 1);
  };

  const fillFormForEditing = (item: TFormData) => {
    const nameInput = document.querySelector(
      'input[name="name"]'
    ) as HTMLInputElement;
    const priceInput = document.querySelector(
      'input[name="price"]'
    ) as HTMLInputElement;

    if (nameInput && priceInput) {
      nameInput.value = item.name;
      priceInput.value = item.price.toString();
    }
    setEditingId(item.id);
  };

  const handleDelete = (id: string) => {
    setInputsData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (item: TFormData) => {
    fillFormForEditing(item);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Form onSubmit={handleSubmit} formKey={formKey} editing={!!editingId} />
        <List
          list={inputsData}
          onDelete={handleDelete}
          onEdit={handleEdit}
          editingId={editingId}
        />
      </div>
    </div>
  );
};
