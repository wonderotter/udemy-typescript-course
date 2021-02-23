import React from 'react';

type AppProps = {
  color: string;
};
function App({ color }: AppProps) {
  return <div>Hi {color}!</div>;
}

export default App;
