export const pageStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0A0F0A',
  backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.12), transparent 60%)',
};

export const cardStyle = {
  width: '400px',
  maxWidth: '90vw',
  backgroundColor: '#0F1512',
  border: '1px solid rgba(34, 197, 94, 0.18)',
  borderRadius: '16px',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  alignItems: 'center',
  boxShadow: '0 0 40px rgba(34, 197, 94, 0.08)',
};

export const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  display: 'flex',
  justifyContent: 'center',
  gap: '24px',
  padding: '20px',
  backgroundColor: '#0A0F0A',
  borderBottom: '1px solid rgba(34, 197, 94, 0.18)',
};

export const linkStyle = {
  color: '#4ADE80',
  textDecoration: 'none',
};

export const layoutPage = {
  minHeight: '100vh',
  display: 'flex',
  backgroundColor: '#0A0F0A',
  position: 'relative',
  overflow: 'hidden',
  maxWidth: '1440px',
  margin: '0 auto',
};

export const layoutGlow = {
  position: 'absolute',
  top: '-220px',
  left: '-180px',
  width: '560px',
  height: '560px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(61,220,132,0.15), transparent 70%)',
  pointerEvents: 'none',
};

export const layoutLeftColumn = {
  width: '46%',
  maxWidth: '560px',
  flexShrink: 0,
  boxSizing: 'border-box',
  padding: '56px 48px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  zIndex: 1,
};

export const layoutLogoRow = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

export const layoutMobileLogoRow = {
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
  marginBottom: '28px',
};

export const layoutLogoMark = {
  width: '30px',
  height: '30px',
  borderRadius: '8px',
  backgroundColor: '#3DDC84',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

export const layoutLogoText = {
  fontSize: '18px',
  fontWeight: 600,
  color: '#F4F7F3',
};

export const layoutTitle = {
  fontSize: '38px',
  lineHeight: 1.16,
  fontWeight: 600,
  color: '#F4F7F3',
  maxWidth: '440px',
  margin: 0,
};

export const layoutDescription = {
  marginTop: '18px',
  fontSize: '15px',
  lineHeight: 1.6,
  color: '#93A69A',
  maxWidth: '380px',
};

export const layoutStatsRow = {
  display: 'flex',
  gap: '28px',
  marginTop: '36px',
};

export const layoutStatValue = {
  fontSize: '24px',
  fontWeight: 600,
  color: '#F4F7F3',
};

export const layoutStatLabel = {
  fontSize: '12.5px',
  color: '#5B6A62',
  marginTop: '4px',
};

export const layoutCopyright = {
  fontSize: '13px',
  color: '#5B6A62',
};

export const layoutRightColumn = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
  boxSizing: 'border-box',
  position: 'relative',
  zIndex: 1,
};

export const layoutCard = {
  width: '100%',
  maxWidth: '400px',
  backgroundColor: '#111A11',
  border: '1px solid rgba(61,220,132,0.16)',
  borderRadius: '20px',
  padding: '40px',
  boxSizing: 'border-box',
  boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
};