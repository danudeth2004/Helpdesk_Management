import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from './ticket';

export const store = configureStore({
  reducer: {
    tickets: ticketReducer,
  },
});
