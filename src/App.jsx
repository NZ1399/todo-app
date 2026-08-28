import { Routes, Route, Link } from 'react-router'
import Login from './modules/Auth/ui/Login.jsx';
import Register from './modules/Auth/ui/Register.jsx';
import ForgotPassword from './modules/Auth/ui/ForgotPassword.jsx';
import { navStyle, linkStyle } from './modules/Auth/styles.js';

function App() {
  return (
    <div>
      <nav style={navStyle}>
        <Link to="/login" style={linkStyle}>Вхід</Link>
        {' | '}
        <Link to="/register" style={linkStyle}>Реєстрація</Link>
         {' | '}
         <Link to="/forgot-password" style={linkStyle}>Забули пароль?</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  )
}

export default App