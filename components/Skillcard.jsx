import React from 'react';

const Skillcard = ({ title, logoImg, content }) => {
  return (
    <div className="card bg-[#DEF2F1] m-3 w-[384px] h-[289px] p-5 rounded-md shadow-lg shadow-black hover:scale-105 transition-all cursor-pointer hover:shadow-xl">
      <div className="top flex justify-between items-center">
        <div className="left">
          <h4 className='font-semibold text-lg'>{title}</h4>
        </div>
        <div className="right">
          <img src={logoImg} alt={title} width={60} />
        </div>
      </div>
      <div className="bottom mt-5">
        <ul>
          {content.map((point, index) => (
            <li key={index} className='flex items-center my-1'>
              <span className='mr-4 text-[#1f5755] font-bold'>✓</span>
              <p className='font-sm'>{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skillcard;
