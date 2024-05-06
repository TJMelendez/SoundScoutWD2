import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularEvents: [],
  popularArtists: [],
  selectedEvent: null,
  searchResults: [],
};

const soundScoutSlice = createSlice({
  name: 'soundScout',
  initialState,
  reducers: {
    setPopularEvents(state, action) {
      state.popularEvents = action.payload;
    },
    setPopularArtists(state, action) {
      state.popularArtists = action.payload;
    },
    setSelectedEvent(state, action) {
      state.selectedEvent = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

export const {
  setPopularEvents,
  setPopularArtists,
  setSelectedEvent,
  setSearchResults,
} = soundScoutSlice.actions;

export default soundScoutSlice.reducer;
