import { styles } from './styles.js';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
}

function MainInput({ label, isError, ...rest }: IProps) {
  return (
    <div style={styles.container}>
      {label && <label style={styles.label}>{label}</label>}
      <input {...rest} style={isError ? { ...styles.input, ...styles.invalidInput } : styles.input} />
    </div>
  );
}

export default MainInput;