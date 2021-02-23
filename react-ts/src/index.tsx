import React, { useState } from 'react';
import ReactDOM from 'react-dom';

type AppProps = {
  color?: string;
};

function App(props: AppProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const onIncrement = (): void => {
    setCounter(counter + 1);
  };

  const onDecrement = (): void => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>{props.color}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      {counter}
    </div>
  );
}

ReactDOM.render(<App color="red" />, document.getElementById('root'));
