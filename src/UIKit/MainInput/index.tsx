import { useState } from 'react';
import { styles } from './styles.js';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  icon?: React.ReactNode;
}

const eyeIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const eyeOffIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.94 10.94 0 0112 20c-7 0-11-7-11-7a21.6 21.6 0 015.06-6.06M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 7 11 7a21.6 21.6 0 01-2.94 3.94M14.12 14.12a3 3 0 11-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

function MainInput({ label, isError, icon, type, ...rest }: IProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === 'password';
  const actualType = isPasswordField && showPassword ? 'text' : type;

  return (
    <div style={styles.container}>
      {label && <label style={styles.label}>{label}</label>}
      <div style={styles.inputWrapper as React.CSSProperties}>
        {icon && <span style={styles.iconLeft as React.CSSProperties}>{icon}</span>}
        <input
          {...rest}
          type={actualType}
          style={
            {
              ...(isError ? { ...styles.input, ...styles.invalidInput } : styles.input),
              ...(icon ? styles.inputWithIcon : {}),
              ...(isPasswordField ? styles.inputWithRightIcon : {}),
            } as React.CSSProperties
          }
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eyeButton as React.CSSProperties}
          >
            {showPassword ? eyeOffIcon : eyeIcon}
          </button>
        )}
      </div>
    </div>
  );
}

export default MainInput;