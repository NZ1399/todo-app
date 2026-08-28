import { styles } from './styles.js';

interface IProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
}

function MainButton({ disabled, isLoading, text, ...rest }: IProps) {
  return (
    <button onClick={rest.onClick} disabled={disabled} style={disabled ? styles.buttonDisabled : styles.buttonActive}>
      {isLoading ? 'Loading...' : text}
    </button>
  );
}

export default MainButton;