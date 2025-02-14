import { useState } from 'react';
import TicketTable from '../components/TicketTable';
import TicketForm from '../components/TicketForm';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Helpdesk Dashboard</h1>
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
          Create Ticket
        </button>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <TicketTable />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.70)' }}>
          <div className="w-1/4 bg-white p-5 rounded-lg shadow-lg">
            <div className="relative">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Create New Ticket</h2>
              <button onClick={() => setIsModalOpen(false)} className="absolute text-2xl cursor-pointer top-0 right-0 transform -translate-x-1/2 text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>

            <TicketForm onClose={() => setIsModalOpen(false)} />
              
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
