import React, { useState } from 'react';

function TodoForm() {
  const [value, setValue] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: 새항목 생성하기
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
