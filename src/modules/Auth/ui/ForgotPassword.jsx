import MainInput from '../../../UIKit/MainInput/MainInput.jsx';
import MainButton from '../../../UIKit/MainButton/MainButton.jsx';
import { useState } from 'react';
import { Link } from 'react-router';
import { pageStyle, cardStyle, linkStyle } from '../styles.js';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    function handleSubmit() {
       if (email === '') {
       alert('Введіть email');
    return;
  }

  console.log('Форма валідна:', email);
}
  return (
  <div style={pageStyle}>
    <div style={cardStyle}>
      <h1>Відновлення пароля</h1>
      <MainInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <MainButton text="Відновити" onClick={handleSubmit} />
      <div>
        <Link to="/login" style={linkStyle}>Згадали пароль? Увійти</Link>
      </div>
    </div>
  </div>
);
}

export default ForgotPassword;