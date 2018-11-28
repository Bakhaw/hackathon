import React from 'react';
import Router from './Router';
import { MyProvider } from './Context';

function App() {
  return (
    <MyProvider>
      <Router />
    </MyProvider>
  );
}

export default App;
