import { inputStyle } from './styles.js';

function MainInput({ value, onChange }) {
  return <input value={value} onChange={onChange} style={inputStyle} />;
}

export default MainInput;