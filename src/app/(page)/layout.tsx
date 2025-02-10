import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="flex flex-row justify-center items-center gap-56 mt-5 text-letov">
        <h1 className="text-3xl text-white text-opacity-85">ГЛАВНАЯ</h1>
        <h1 className="text-3xl text-white opacity-45">МАРКЕТ</h1>
        <h1 className="text-3xl text-white text-opacity-45">ПРОФИЛЬ</h1>
      </nav>
      {children}
    </div>
  );
}
