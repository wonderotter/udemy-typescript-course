import React from 'react';
import MyForm from './MyForm';
//import ReducerSample from './ReducerSample';

function App() {
  function onSubmit(form: { name: string; description: string }) {
    console.log(form);
  }

  return <MyForm onSubmit={onSubmit} />;
}

export default App;
