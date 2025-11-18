import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <main className="min-h-screen">
      {/* Header or Navigation could go here */}
      <Outlet />
      {/* Footer could go here */}
    </main>
  );
};
