export const page = {
  minHeight: '100vh',
  backgroundColor: '#0A0F0A',
  position: 'relative' as const,
  overflow: 'hidden' as const,
};

export const glow = {
  position: 'absolute' as const,
  top: '-220px',
  right: '-160px',
  width: '520px',
  height: '520px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(61,220,132,0.10), transparent 70%)',
  pointerEvents: 'none' as const,
};

export const headerBar = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px 48px',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
  position: 'relative' as const,
  zIndex: 1,
};

export const logoRow = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

export const logoMark = {
  width: '30px',
  height: '30px',
  borderRadius: '8px',
  backgroundColor: '#3DDC84',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const logoText = {
  fontSize: '18px',
  fontWeight: 600,
  color: '#F4F7F3',
};

export const headerRight = {
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
};

export const userEmail = {
  fontSize: '14px',
  color: '#93A69A',
};

export const divider = {
  width: '1px',
  height: '20px',
  backgroundColor: 'rgba(255,255,255,0.07)',
};

export const logoutButton = {
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
  padding: '9px 16px',
  backgroundColor: 'transparent',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '10px',
  color: '#93A69A',
  fontSize: '13.5px',
  fontWeight: 500,
  cursor: 'pointer',
};

export const content = {
  padding: '36px 48px',
  boxSizing: 'border-box' as const,
  position: 'relative' as const,
  zIndex: 1,
};

export const greeting = {
  fontSize: '30px',
  fontWeight: 600,
  color: '#F4F7F3',
  margin: 0,
};

export const greetingSubtitle = {
  margin: '6px 0 28px',
  fontSize: '15px',
  color: '#93A69A',
};

export const statsRow = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '16px',
  marginBottom: '28px',
};

export const statCard = {
  backgroundColor: '#111A11',
  border: '1px solid rgba(61,220,132,0.14)',
  borderRadius: '16px',
  padding: '20px 22px',
};

export const statCardTop = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const statLabel = {
  fontSize: '13px',
  color: '#93A69A',
};

export const statValue = {
  fontSize: '30px',
  fontWeight: 600,
  color: '#F4F7F3',
  marginTop: '10px',
};

export const statValueAccent = {
  fontSize: '30px',
  fontWeight: 600,
  color: '#3DDC84',
  marginTop: '10px',
};

export const quickAddRow = {
  display: 'flex',
  gap: '12px',
  marginBottom: '24px',
};

export const quickAddInputWrapper = {
  position: 'relative' as const,
  flexGrow: 1,
};

export const quickAddIcon = {
  position: 'absolute' as const,
  left: '16px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#5B6A62',
  display: 'flex',
  alignItems: 'center',
};

export const quickAddInput = {
  width: '100%',
  boxSizing: 'border-box' as const,
  padding: '14px 16px 14px 44px',
  backgroundColor: '#111A11',
  border: '1px solid rgba(61,220,132,0.14)',
  borderRadius: '12px',
  color: '#F4F7F3',
  fontSize: '14.5px',
  outline: 'none',
};

export const quickAddButton = {
  padding: '0 26px',
  backgroundColor: '#3DDC84',
  border: 'none',
  borderRadius: '12px',
  color: '#06130B',
  fontSize: '14.5px',
  fontWeight: 600,
  cursor: 'pointer',
};

export const taskListCard = {
  backgroundColor: '#111A11',
  border: '1px solid rgba(61,220,132,0.14)',
  borderRadius: '16px',
  overflow: 'hidden' as const,
};

export const taskListHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 20px',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
};

export const taskListTitle = {
  fontSize: '15px',
  fontWeight: 600,
  color: '#F4F7F3',
  margin: 0,
};

export const taskCountBadge = {
  fontSize: '12px',
  color: '#5B6A62',
  backgroundColor: '#0B0F0B',
  padding: '3px 10px',
  borderRadius: '20px',
};

export const taskRow = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  padding: '15px 20px',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
};

export const taskRowLast = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  padding: '15px 20px',
};

export const checkboxDone = {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#3DDC84',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

export const checkboxEmpty = {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  border: '1.8px solid rgba(255,255,255,0.07)',
  flexShrink: 0,
};

export const taskTextDone = {
  flexGrow: 1,
  fontSize: '14.5px',
  color: '#5B6A62',
  textDecoration: 'line-through',
};

export const taskText = {
  flexGrow: 1,
  fontSize: '14.5px',
  color: '#F4F7F3',
};

export const taskTag = (color: string, bg: string) => ({
  fontSize: '11.5px',
  padding: '4px 10px',
  borderRadius: '20px',
  backgroundColor: bg,
  color: color,
});

export const taskTime = {
  fontSize: '12.5px',
  color: '#5B6A62',
  width: '60px',
  textAlign: 'right' as const,
};