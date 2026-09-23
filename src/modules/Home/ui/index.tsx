function Home({ user }: { user: string }) {
  const userData = JSON.parse(user);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  return (
    <div>
      <header>
        <span>Ласкаво просимо, {userData.email}!</span>
        <button onClick={handleLogout}>Вийти</button>
      </header>
      <h1>Головна сторінка</h1>
    </div>
  );
}

export default Home; 