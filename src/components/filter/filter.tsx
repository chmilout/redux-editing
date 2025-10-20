import { type FC, type ChangeEvent } from 'react';
import cn from './filter.module.css';

export const Filter: FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={cn['filter']}>
      <input
        className={cn['filter-input']}
        type="text"
        placeholder="Фильтр по названию..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
