import MainInput from '../../../UIKit/MainInput/MainInput.jsx';
import MainButton from '../../../UIKit/MainButton/MainButton.jsx';
import { useState } from 'react';
import { Link } from 'react-router';
import { pageStyle, cardStyle, linkStyle } from '../styles.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit() {
  if (email === '' || password === '') {
    alert('Заповніть усі поля');
    return;
  }

  console.log('Форма валідна:', email, password);
}
  return (
    <div style={pageStyle}>
    <div style={cardStyle}>
      <h1>Вхід</h1>
      <MainInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <MainInput value={password} onChange={(e) => setPassword(e.target.value)} />
      <MainButton text="Увійти" onClick={handleSubmit} />
     <div>
      <Link to="/forgot-password" style={linkStyle}>Забули пароль?</Link>
       {' | '}
       <Link to="/register" style={linkStyle}>Немає акаунта? Зареєструватися</Link>
      </div>
     </div>
    </div>
  );
}

export default Login;