import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center mt-5 text-letov px-[100px]">
        <h1 className="text-3xl text-white text-opacity-45 hover:text-opacity-85 transition-all ease-in cursor-pointer">
          ГЛАВНАЯ
        </h1>
        <h1 className="text-3xl text-white text-opacity-45 hover:text-opacity-85 transition-all ease-in cursor-pointer">
          МАРКЕТ
        </h1>
        <h1 className="text-3xl text-white text-opacity-45 hover:text-opacity-85 transition-all ease-in cursor-pointer">
          ПРОФИЛЬ
        </h1>
      </nav>
      {children}
    </div>
  );
}
