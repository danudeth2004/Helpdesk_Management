import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTickets, createTicket, updateTicketStatus } from '../services/api';

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (status = 'all') => {
  const tickets = await getTickets(status);
  return tickets;
});

export const addTicket = createAsyncThunk('tickets/postTicket', async (ticketData) => {
  const newTicket = await createTicket(ticketData);
  return newTicket;
});

export const putTicketStatus = createAsyncThunk('tickets/putTicketStatus', async ({ id, status }) => {
  const updatedTicket = await updateTicketStatus(id, status);
  return updatedTicket;
});

const initialState = {
  tickets: [],
};

const ticket = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        console.log('Tickets after fetch:', action.payload);
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTicket.fulfilled, (state, action) => {
        state.tickets.push(action.payload);
      })
      .addCase(putTicketStatus.fulfilled, (state, action) => {
        const updatedTicket = action.payload;
        const index = state.tickets.findIndex(ticket => ticket.id === updatedTicket.id);
        if (index !== -1) {
          state.tickets[index] = updatedTicket;
        }
      });      
  },
});

export default ticket.reducer;
