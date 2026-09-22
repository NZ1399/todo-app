import MainInput from '../../../../UIKit/MainInput/index.tsx';
import MainButton from '../../../../UIKit/MainButton/index.js';
import { Link } from 'react-router';
import type { CSSProperties } from 'react';
import { pageStyle, cardStyle, linkStyle } from '../../styles.js';
import { useLogin } from '../presenters/useLogin.ts';

function Login() {
  const { email, onBlurEmail, password, setPassword, handleSubmit, isEmailValid, handleEmailChange, disabled, isLoading } = useLogin();

  return (
    <div style={pageStyle as CSSProperties}>
      <div style={cardStyle as CSSProperties}>
        <h1>Вхід</h1>
        <MainInput label="Email" value={email} onChange={handleEmailChange} isError={!isEmailValid} onBlur={onBlurEmail} />
        <MainInput label="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
        <MainButton text="Увійти" onClick={handleSubmit} disabled={disabled} isLoading={isLoading} />
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