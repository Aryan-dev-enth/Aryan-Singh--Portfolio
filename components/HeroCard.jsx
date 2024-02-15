import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroCard = () => {
  return (
    <div className='container w-6/12 relative' style={{fontFamily:"Consolas"}}>
      <img src="console.png" alt="" width={650} loading='lazy' />
      <div className="text-container absolute top-0 left-0 w-600 h-full flex items-center justify-center">
        <div className="text p-4  rounded-md opacity-80">
          <h1 className="text-4xl font-bold mb-4 text-green-400">Hello!</h1>
          <p className="mb-4 text-white">&gt; My name is Aryan, and I am 20 years old.</p>
          <p className="mb-4 text-white">&gt; I love programming and challenges.</p>
          <p className="mb-4 text-white">&gt; I am currently exploring newer tech stacks.</p>
          <p className='text-white'>&gt; If you want to know more about me, you are in the right place :)</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
