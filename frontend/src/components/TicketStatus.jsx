import { useDispatch } from 'react-redux';
import { putTicketStatus } from '../store/ticket';

const statusColors = {
  pending: "bg-yellow-500",
  accepted: "bg-blue-500",
  resolved: "bg-green-500",
  rejected: "bg-red-500",
};

const TicketStatus = ({ ticketId, currentStatus, updatedAt }) => {
  const dispatch = useDispatch();
  const statuses = ["pending", "accepted", "resolved", "rejected"];

  const handleChange = (e) => {
    dispatch(putTicketStatus({ id: ticketId, status: e.target.value, updatedAt }));
  };

  return (
    <select value={currentStatus} onChange={handleChange} 
      className={`border p-2 rounded text-white ${statusColors[currentStatus]} transition`}>
      {statuses.map(status => (
        <option key={status} value={status} className="text-black">
          {status}
        </option>
      ))}
    </select>
  );
};

export default TicketStatus;
