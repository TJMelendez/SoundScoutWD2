import { configureStore } from '@reduxjs/toolkit';
import soundScoutReducer from '/src/redux/Slice.js';

const store = configureStore({
  reducer: {
    soundScout: soundScoutReducer,
  },
});

export default store;
