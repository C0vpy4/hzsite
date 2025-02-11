'use client';
import { useState } from 'react';

export default function Forms() {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [pass, setPass] = useState('');
  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <h1 className="text-5xl ">ПРИСОЕДИНЯЙСЯ КАК...</h1>
      <div className="flex flex-row justify-center items-center gap-12">
        <div
          className="w-[469px] h-[562px] flex flex-col 
        justify-center items-center bg-white bg-opacity-[0.1]"
        >
          <h2 className="text-3xl text-white text-opacity-[0.85] mb-28">
            ПОКУПАТЕЛЬ
          </h2>
          <input
            type="email"
            placeholder="EMAIL"
            className="mb-14 w-[434px] h-[50px] border-none bg-[#111111]
            bg-opacity-60 text-white text-opacity-[45] focus:outline-none pl-2.5"
          />
          <input
            type={type}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="ПАРОЛЬ"
            className="mb-14 w-[434px] h-[50px] border-none bg-[#111111]
            bg-opacity-60 text-white text-opacity-[45] focus:outline-none pl-2.5"
          />
          <label>
            <button className="w-6 h-6" onClick={handleToggle}>
              1
            </button>
          </label>
          <button
            className="w-48 h-11 border-none bg-[#111111] bg-opacity-60 
          text-base text-white text-opacity-[65px]"
          >
            ЗАРЕГАТЬСЯ
          </button>
        </div>
        <div
          className="w-[469px] h-[562px] flex flex-col 
        justify-center items-center bg-white bg-opacity-[0.1]"
        >
          <h2 className="text-3xl text-white text-opacity-[0.85] mb-28">
            ПРОДАВЕЦ
          </h2>
          <input
            type="email"
            placeholder="EMAIL"
            className="mb-14 w-[434px] h-[50px] border-none bg-[#111111]
            bg-opacity-60 text-white text-opacity-[45] focus:outline-none pl-2.5"
          />
          <input
            type={type}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="ПАРОЛЬ"
            className="mb-14 w-[434px] h-[50px] border-none bg-[#111111]
            bg-opacity-60 text-white text-opacity-[45] focus:outline-none pl-2.5"
          />
          <label>
            <button className="w-6 h-6" onClick={handleToggle}>
              1
            </button>
          </label>
          <button
            className="w-48 h-11 border-none bg-[#111111] bg-opacity-60 
          text-base text-white text-opacity-[65px]"
          >
            ЗАРЕГАТЬСЯ
          </button>
        </div>
      </div>
    </div>
  );
}
