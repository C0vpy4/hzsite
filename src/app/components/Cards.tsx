'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Slide {
  id: number;
  image: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/YourSafe.png',
    description: 'ВАША БЕЗОПАСНОСТЬ - НАШ ДОЛГ',
  },
  {
    id: 2,
    image: '/Policeman.png',
    description: 'ЕСТЬ ТОЛЬКО ВЫ И ПРОДАВЕЦ И НИКАКИХ ЛЮДЕЙ В ФОРМЕ!',
  },
  { id: 3, image: '/Payment.png', description: 'ПЛАТИТЕ КАК ХОТИТЕ' },
  {
    id: 4,
    image: '/AdminsGuard.png',
    description: 'АДМИНИСТРАЦИЯ ЗА ВАС ГОРОЙ',
  },
  { id: 5, image: '/Mom.png', description: 'МАМА НЕ НАРУГАЕТ' },
  {
    id: 6,
    image: '/Cashback.png',
    description: 'КЭШБЕК И БОНУСЫ В ВИДЕ КРИПТЫ - ТОЛЬКО У ВАС',
  },
];

export default function Cards() {
  const [showFirstSet, setShowFirstSet] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstSet((prev) => !prev);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showFirstSet]);

  const firstSet = slides.slice(0, 3);
  const secondSet = slides.slice(3, 6);

  const currentSet = showFirstSet ? firstSet : secondSet;

  return (
    <div className="text-center mt-5 flex items-center justify-around w-full relative">
      {currentSet.map((slide) => (
        <div
          key={slide.id}
          className="mb-5 grid grid-rows-2 place-items-center items-center w-1/3 relative"
        >
          <Image
            src={slide.image}
            alt={slide.description}
            className="flex items-center justify-center "
            width={150}
            height={150}
          />
          <div className=" text-wrap w-[70%] capitalize">
            {slide.description}
          </div>
        </div>
      ))}
    </div>
  );
}
