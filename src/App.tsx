import { type FormEvent, type FC } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { Form } from './components/form';
import { List } from './components/list';
import {
  addService,
  updateService,
  deleteService,
  setEditingId,
  cancelEditing,
} from './redux/actions';
import { useAppSelector } from './redux/hooks';
import { type TFormData } from './components/types';
import './App.css';

export const App: FC = () => {
  const { items, editingId } = useAppSelector((state) => state.services);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const processedData = {
      name: String(data.name) || '',
      price: Number(data.price) || 0,
    };
    if (editingId) {
      dispatch(updateService(editingId, processedData));
    } else {
      const newItem = {
        id: nanoid(),
        ...processedData,
      };
      dispatch(addService(newItem));
    }
    form.reset();
  };

  const handleDelete = (id: string) => {
    dispatch(deleteService(id));
  };

  const handleEdit = (item: TFormData) => {
    dispatch(setEditingId(item.id));

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
  };

  const handleCancel = () => {
    dispatch(cancelEditing());

    const form = document.querySelector('form');
    if (form) {
      form.reset();
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Form
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          editing={!!editingId}
        />
        <List
          list={items}
          onDelete={handleDelete}
          onEdit={handleEdit}
          editingId={editingId}
        />
      </div>
    </div>
  );
};
