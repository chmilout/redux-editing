import { type FC } from 'react';
import type { TFormData } from '../types';
import cn from './list-item.module.css';

export const ListItem: FC<{
  item: TFormData;
  onDelete: (id: string) => void;
  onEdit: (item: TFormData) => void;
  disabled: boolean;
}> = ({ item, onDelete, onEdit, disabled }) => {
  return (
    <li className={cn['list-item']}>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>
        <button onClick={() => onDelete(item.id)} disabled={disabled}>
          ✘
        </button>
        <button onClick={() => onEdit(item)}>✎</button>
      </div>
    </li>
  );
};
