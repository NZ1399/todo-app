import { Routes, Route, Link, useLocation, Navigate } from 'react-router'
import Login from './modules/authentication/authorization/ui/index.jsx';
import Register from './modules/authentication/registration/ui/index.jsx'
import { navStyle, linkStyle } from './modules/authentication/styles.js';
import ForgotPassword from './modules/authentication/recovery/ui/index.jsx';
import Home from './modules/Home/ui/index.jsx';

  function App() {
  const location = useLocation();
  const user = localStorage.getItem('user');
  const isAuthPage = location.pathname !== '/home';

  return (
    <div>
          {isAuthPage && (
      <nav style={navStyle}>
        <Link to="/login" style={linkStyle}>Вхід</Link>
        {' | '}
        <Link to="/register" style={linkStyle}>Реєстрація</Link>
         {' | '}
         <Link to="/forgot-password" style={linkStyle}>Забули пароль?</Link>
      </nav>
          )}
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  )
}

export default App