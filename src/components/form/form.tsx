import { type FC, type FormEvent } from 'react';
import cn from './form.module.css';

export const Form: FC<{
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  formKey: number;
  editing: boolean;
}> = ({ onSubmit, formKey, editing }) => {
  return (
    <form onSubmit={onSubmit} key={formKey} className={cn['form']}>
      <div className={cn['input-group']}>
        <label>Введите название</label>
        <input className={cn['input']} type="text" name="name" placeholder="Введите название" />
      </div>
      <div className={cn['input-group']}>
        <label>Введите сумму</label>
        <input className={cn['input']} type="number" name="price" placeholder="Введите сумму" />
      </div>
      <div>
        <button className={cn['form-btn']} type="submit">Save</button>
        {editing && <button className={cn['form-btn']}>Cancel</button>}
      </div>
    </form>
  );
};
