import MainInput from '../../../../UIKit/MainInput/index.tsx';
import MainButton from '../../../../UIKit/MainButton/index.js';
import { Link } from 'react-router';
import type { CSSProperties } from 'react';
import { pageStyle, cardStyle, linkStyle } from '../../styles.js';
import { useRegister } from '../presenters/useRegister.ts';

function Register() {
    const { email, password, confirmPassword, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange, onBlurEmail, onBlurPassword, onBlurConfirmPassword, isEmailValid, isPasswordValid, isConfirmPasswordValid, handleSubmit, disabled, isLoading } = useRegister();

    return (
        <div style={pageStyle as CSSProperties}>
            <div style={cardStyle as CSSProperties}>
                <h1>Реєстрація</h1>
                <MainInput label="Email" value={email} onChange={handleEmailChange} isError={!isEmailValid} onBlur={onBlurEmail} />
                <MainInput label="Пароль" value={password} onChange={handlePasswordChange} isError={!isPasswordValid} onBlur={onBlurPassword} />
                {isPasswordValid === false && <p style={{ color: '#FF6B6B', fontSize: '13px' }}>Мінімум 6 символів, одна велика літера та одна цифра</p>}
                <MainInput label="Підтвердження пароля" value={confirmPassword} onChange={handleConfirmPasswordChange} isError={!isConfirmPasswordValid} onBlur={onBlurConfirmPassword} />
                <MainButton text="Зареєструватися" onClick={handleSubmit} disabled={disabled} isLoading={isLoading} />
                <div>
                    <Link to="/login" style={linkStyle}>Вже є акаунт? Увійти</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;