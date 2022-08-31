import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import { counterReducer } from './App';

const store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
  root.render(
    <React.StrictMode>
      <App 
        state={store.getState()}
        store={store}
      />
    </React.StrictMode>
  );
}
render();

store.subscribe(render);