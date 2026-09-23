import MainInput from '../../../../UIKit/MainInput/index.tsx';
import MainButton from '../../../../UIKit/MainButton/index.js';
import { Link } from 'react-router';
import { pageStyle, cardStyle, linkStyle } from '../../styles.js';
import { useForgotPassword } from '../presenters/useForgotPassword.ts';

function ForgotPassword() {
    const { email, handleEmailChange, onBlurEmail, isEmailValid, handleSubmit, disabled, isLoading } = useForgotPassword();

    return (
        <div style={pageStyle}>
            <div style={cardStyle}>
                <h1 style={{ lineHeight: '1.3' }}>Відновлення пароля</h1>

                <MainInput label="Email" value={email} onChange={handleEmailChange} isError={!isEmailValid} onBlur={onBlurEmail} />
                <MainButton text="Відновити" onClick={handleSubmit} disabled={disabled} isLoading={isLoading} />
                <div>
                    <Link to="/login" style={linkStyle}>Згадали пароль? Увійти</Link>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;