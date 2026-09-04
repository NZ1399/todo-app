import { Routes, Route, Link, useLocation } from 'react-router'
import Login from './modules/authentication/authorization/ui/index.jsx';
import Register from './modules/authentication/registration/ui/index.jsx'
import { navStyle, linkStyle } from './modules/authentication/styles.js';
import ForgotPassword from './modules/authentication/recovery/ui/index.jsx';
import Home from './modules/Home/ui/index.jsx';

  function App() {
  const location = useLocation();
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
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App