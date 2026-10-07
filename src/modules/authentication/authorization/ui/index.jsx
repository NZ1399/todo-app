import MainInput from '../../../../UIKit/MainInput/index.tsx';
import MainButton from '../../../../UIKit/MainButton/index.js';
import { Link } from 'react-router';
import AuthLayout from '../../ui/AuthLayout.tsx';
import { useLogin } from '../presenters/useLogin.ts';
import { title, subtitle, forgotRow, link, bottomText } from './styles.js';

const mailIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16v12H4z" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

const lockIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" />
  </svg>
);

function Login() {
  const { email, onBlurEmail, password, setPassword, handleSubmit, isEmailValid, handleEmailChange, disabled, isLoading } = useLogin();

  return (
    <AuthLayout
      title="Ми чекали на тебе."
      description="Твої задачі чекають там, де ти їх залишив. Заходь і продовжуй день з того самого місця."
      stats={[
        { value: '12k+', label: 'завдань виконано' },
        { value: '4.9', label: 'оцінка користувачів' },
        { value: '24/7', label: 'синхронізація' },
      ]}
    >
      <h2 style={title}>Увійти</h2>
      <p style={subtitle}>Введи дані свого акаунта</p>
      <MainInput
        label="Електронна пошта"
        placeholder="you@example.com"
        icon={mailIcon}
        value={email}
        onChange={handleEmailChange}
        isError={!isEmailValid}
        onBlur={onBlurEmail}
      />
      <MainInput
        label="Пароль"
        placeholder="••••••••"
        icon={lockIcon}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={forgotRow}>
        <Link to="/forgot-password" style={link}>Забули пароль?</Link>
      </div>
      <MainButton text="Увійти" onClick={handleSubmit} disabled={disabled} isLoading={isLoading} />
      <p style={bottomText}>
        Немає акаунта? <Link to="/register" style={link}>Зареєструватися</Link>
      </p>
    </AuthLayout>
  );
}

export default Login;