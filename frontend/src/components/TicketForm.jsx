import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTicket, fetchTickets } from '../store/ticket';

const TicketForm = ({ onClose, statusFilter }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleCreateTicket = async (ticketData) => {
    try {
      await dispatch(addTicket(ticketData));
      dispatch(fetchTickets(statusFilter));
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  const onSubmit = (data) => {
    handleCreateTicket(data);
    reset();
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white p-6 shadow-md rounded-lg">
      <input {...register("title", { required: true })} placeholder="Title" 
        className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <textarea {...register("description", { required: true })} placeholder="Description" 
        className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
      <input {...register("contact", { required: true })} placeholder="Contact Information" 
        className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <button type="submit" className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
        Submit Ticket
      </button>
    </form>
  );
};

export default TicketForm;
