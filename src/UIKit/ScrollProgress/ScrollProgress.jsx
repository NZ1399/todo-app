function ScrollProgress() {
  return (
    <div style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: '2px', backgroundColor: 'rgba(34, 197, 94, 0.15)' }}>
      <div style={{ position: 'absolute', left: '-3px', top: '0%', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
    </div>
  );
}

export default ScrollProgress;