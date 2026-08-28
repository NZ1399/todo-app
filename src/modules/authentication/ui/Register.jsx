import MainInput from '../../../UIKit/MainInput/index';
import MainButton from '../../../UIKit/MainButton/index';
import { useState } from 'react';
import { Link } from 'react-router';
import { pageStyle, cardStyle, linkStyle } from '../styles';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
     function handleSubmit() {
      if (email === '' || password === '' || confirmPassword === '') {
        alert('Заповніть усі поля');
        return;
  }

      if (password !== confirmPassword) {
        alert('Паролі не збігаються');
        return;
  }

  console.log('Форма валідна:', email, password);
}
  return (
  <div style={pageStyle}>
    <div style={cardStyle}>
      <h1>Реєстрація</h1>
      <MainInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <MainInput value={password} onChange={(e) => setPassword(e.target.value)} />
      <MainInput value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <MainButton text="Зареєструватися" onClick={handleSubmit} />
      <div>
        <Link to="/login" style={linkStyle}>Вже є акаунт? Увійти</Link>
      </div>
    </div>
  </div>
);
}

export default Register;