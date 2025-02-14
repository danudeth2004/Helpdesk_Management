import { Provider } from 'react-redux';
import { store } from './store/ticketStore';
import Dashboard from './pages/Dashboard';

const App = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default App;
