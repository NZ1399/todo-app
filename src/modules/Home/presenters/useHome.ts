export const useHome = (user: string) => {
  const userData = JSON.parse(user);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return { userData, handleLogout };
};