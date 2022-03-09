import { Routes, Route } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Home from './pages/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Disconnect from './components/disconnect/Disconnect';
import AdminPanel from './components/admin/admin-panel/AdminPanel';
import AdminRoutes from './components/admin/admin-routes/AdminRoutes';
import UserProvider from './contexts/UserProvider';

import './App.css';

const App = () => (
  <div className="App">
    <UserProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/disconnect" element={<Disconnect />} />
        <Route path="/admin" element={<AdminRoutes />}>
          <Route index element={<AdminPanel />} />
        </Route>
      </Routes>
    </UserProvider>
  </div>
);

export default App;
