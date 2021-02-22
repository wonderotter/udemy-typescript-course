import React, { useState } from 'react';
import { useTodosDispatch } from '../contexts/TodosContext';

function TodoForm() {
  const [value, setValue] = useState<string>('');
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value,
    });
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="무엇을 하실 건가요?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoForm;
