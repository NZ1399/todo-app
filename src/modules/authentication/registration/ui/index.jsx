import MainInput from '../../../../UIKit/MainInput/index.tsx';
import MainButton from '../../../../UIKit/MainButton/index.js';
import { Link } from 'react-router';
import AuthLayout from '../../ui/AuthLayout.tsx';
import { useRegister } from '../presenters/useRegister.ts';
import { title, subtitle, link, bottomText, passwordHint, passwordError } from './styles.js';

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

function Register() {
  const { email, password, confirmPassword, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange, onBlurEmail, onBlurPassword, onBlurConfirmPassword, isEmailValid, isPasswordValid, isConfirmPasswordValid, handleSubmit, disabled, isLoading } = useRegister();

  return (
    <AuthLayout
      title="Почни планувати з першого дня."
      description="Створи акаунт за хвилину і візьми свої справи під контроль вже сьогодні."
    >
      <h2 style={title}>Створити акаунт</h2>
      <p style={subtitle}>Плануй справи та звільни час для важливого</p>
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
        onChange={handlePasswordChange}
        isError={!isPasswordValid}
        onBlur={onBlurPassword}
      />
      <p style={isPasswordValid === false ? passwordError : passwordHint}>
        Мінімум 6 символів, одна велика літера та цифра
      </p>
      <MainInput
        label="Підтвердження пароля"
        placeholder="••••••••"
        icon={lockIcon}
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        isError={!isConfirmPasswordValid}
        onBlur={onBlurConfirmPassword}
      />
      <MainButton text="Зареєструватися" onClick={handleSubmit} disabled={disabled} isLoading={isLoading} />
      <p style={bottomText}>
        Вже маєте акаунт? <Link to="/login" style={link}>Увійти</Link>
      </p>
    </AuthLayout>
  );
}

export default Register;