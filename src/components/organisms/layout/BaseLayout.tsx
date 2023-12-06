import * as React from 'react';

interface IBaseLayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: IBaseLayoutProps) {
  return (
    <main className="flex justify-center w-full min-h-screen bg-neutral-100">
      <div className="max-w-lg w-full bg-white shadow-2xl">{children}</div>
    </main>
  );
}

export default BaseLayout;
