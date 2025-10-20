import { type FC } from 'react';
import type { TFormData } from '../types';
import { ListItem } from '../list-item';
import cn from './list.module.css';

export const List: FC<{
  list: TFormData[];
  onDelete: (id: string) => void;
  onEdit: (item: TFormData) => void;
  editingId: string | null;
}> = ({ list, editingId, ...rest }) => {
  return (
    <>
      {list.length === 0 ? (
        <div className={cn['empty']}>Нет элементов для отображения</div>
      ) : (
        <ul className={cn['list']}>
          {list.map((item) => (
            <ListItem
              item={item}
              disabled={editingId === item.id}
              key={item.id}
              {...rest}
            />
          ))}
        </ul>
      )}
    </>
  );
};
