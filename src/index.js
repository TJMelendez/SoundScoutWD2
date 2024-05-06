import createRoot from 'react-dom';
import { Provider } from 'react-redux';
import store from '/src/redux/store.js';
import App from '/src/App.jsx';

createRoot(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
