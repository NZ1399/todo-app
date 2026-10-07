import MainInput from '../../../../UIKit/MainInput/index.tsx';
import MainButton from '../../../../UIKit/MainButton/index.js';
import { Link } from 'react-router';
import AuthLayout from '../../ui/AuthLayout.tsx';
import { useForgotPassword } from '../presenters/useForgotPassword.ts';
import { title, subtitle, link, bottomText } from './styles.js';

const mailIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16v12H4z" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

function ForgotPassword() {
  const { email, handleEmailChange, onBlurEmail, isEmailValid, handleSubmit, disabled, isLoading } = useForgotPassword();

  return (
    <AuthLayout
      title="Буває. Ми повернемо тебе назад."
      description="Достатньо email — надішлемо посилання для створення нового пароля за хвилину."
    >
      <h2 style={title}>Відновлення пароля</h2>
      <p style={subtitle}>Введи електронну пошту — ми надішлемо посилання для створення нового пароля</p>
      <MainInput
        label="Електронна пошта"
        placeholder="you@example.com"
        icon={mailIcon}
        value={email}
        onChange={handleEmailChange}
        isError={!isEmailValid}
        onBlur={onBlurEmail}
      />
      <MainButton text="Надіслати посилання" onClick={handleSubmit} disabled={disabled} isLoading={isLoading} />
      <p style={bottomText}>
        Згадали пароль? <Link to="/login" style={link}>Увійти</Link>
      </p>
    </AuthLayout>
  );
}

export default ForgotPassword;