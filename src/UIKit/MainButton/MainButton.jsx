import { buttonStyle } from './styles.js';

function MainButton({ text, onClick }) {
  return <button onClick={onClick} style={buttonStyle}>{text}</button>;
}

export default MainButton;