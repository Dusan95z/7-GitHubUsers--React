import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Dashboard></Dashboard>
      <Login />
      <Error />
    </div>
  );
};

export default App;
