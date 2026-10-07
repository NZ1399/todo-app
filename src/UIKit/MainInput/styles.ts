export const styles = {
  container: {
    width: '100%',
    flexDirection: 'column' as any,
    display: 'flex',
    alignItems: 'stretch',
    marginBottom: '10px'
  },
 label: {
  color: '#EAFBF2',
  marginBottom: '5px',
  fontSize: '13px',
},
  input: {
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#0B0F0B',
    color: '#EAFBF2',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '15px',
    outline: 'none',
  },
  invalidInput: {
    border: '1px solid #FF0000',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  iconLeft: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    color: '#5B6A62',
  },
  inputWithIcon: {
    paddingLeft: '42px',
  },
    inputWithRightIcon: {
    paddingRight: '42px',
  },
  eyeButton: {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    color: '#5B6A62',
    display: 'flex',
    alignItems: 'center',
  },
};