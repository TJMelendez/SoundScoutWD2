import createRoot from 'react-dom';
import { Provider, createStore } from 'react-redux';
import store from '/src/redux/store.js';
import App from '/src/App.jsx';
import soundScoutSlice from '/src/redux/Slice.js'

const newStore = createStore(soundScoutSlice.reducer);

createRoot(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
