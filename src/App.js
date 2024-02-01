// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import StepForm from './components/StepForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <StepForm />
      </div>
    </Provider>
  );
}

export default App;
