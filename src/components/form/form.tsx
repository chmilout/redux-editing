import { type FC, type FormEvent } from 'react';
import cn from './form.module.css';

export const Form: FC<{
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  editing: boolean;
}> = ({ onSubmit, onCancel, editing }) => {
  return (
    <form onSubmit={onSubmit} className={cn['form']}>
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
        {editing && <button className={cn['form-btn']} onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
};
