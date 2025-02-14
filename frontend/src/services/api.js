import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tickets';

export const getTickets = async (status = 'all') => {
  try {
    const response = await axios.get(`${API_URL}?status=${status}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tickets:', error.response ? error.response.data : error.message);
    throw error;
  }
};


export const createTicket = async (ticketData) => {
  try {
    console.log(JSON.stringify(ticketData, null, 2));
    const response = await axios.post(API_URL, ticketData);
    return response.data;
  } catch (error) {
    console.error('Error creating ticket:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateTicketStatus = async (ticketId, status) => {
  try {
    console.log(JSON.stringify({ ticketId, status }, null, 2));
    const response = await axios.put(`${API_URL}/${ticketId}`, { status });
    return response.data;
  } catch (error) {
    console.error('Error updating ticket status:', error.response ? error.response.data : error.message);
    throw error;
  }
};
