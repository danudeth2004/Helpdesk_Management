import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import TicketStatus from './TicketStatus';
import { fetchTickets } from '../store/ticket';

const TicketTable = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets.tickets);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    console.log(statusFilter);
    dispatch(fetchTickets(statusFilter));
  }, [dispatch, statusFilter]);

  const handleStatusFilterChange = (e) => {
    const selectedStatus = e.target.value;
    setStatusFilter(selectedStatus);
  };

  const getHeaderColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-400';
      case 'accepted':
        return 'bg-blue-400';
      case 'resolved':
        return 'bg-green-400';
      case 'rejected':
        return 'bg-red-400';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded h-full overflow-auto">
      <h2 className="text-lg font-semibold mb-4">Tickets</h2>
      {tickets.length === 0 ? (
        <p className="text-center text-gray-500">No tickets available</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-500 p-2">Title</th>
              <th className="border border-gray-500 p-2">Description</th>
              <th className="border border-gray-500 p-2">Contact</th>
              <th className={`border border-gray-500 p-2 ${getHeaderColor(statusFilter)}`}>
                Status
                <select
                  onChange={handleStatusFilterChange}
                  className="ml-2 p-1 border rounded"
                  value={statusFilter}
                >
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                  <option value="resolved">Resolved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </th>
              <th className="border border-gray-500 p-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.id} className="border border-gray-300 hover:bg-gray-100 transition">
                <td className="p-2">{ticket.title}</td>
                <td className="p-2">{ticket.description}</td>
                <td className="p-2">{ticket.contact}</td>
                <td className="p-2"><TicketStatus ticketId={ticket.id} currentStatus={ticket.status} /></td>
                <td className="p-2">{new Date(ticket.created_at).toLocaleString('en-US', { timeZone: 'Asia/Bangkok', hour12: false})}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TicketTable;
