import React from 'react';

const Rightcard = ({ style, title, content, year, logoImg }) => {
  return (
    <div className='h-full w-full flex items-center flex-row-reverse' style={style}>
      <div className='h-[120px] bg-[#DEF2F1] w-[500px] rounded-l-full mr-[112px] shadow-lg shadow-black flex justify-start  gap-5 items-center px-7'>
        <div className="left">
          <img src={logoImg} alt="" width={50}/>
        </div>
        <div className="right">
          <h1 className='text-lg font-semibold'>
            {title}
          </h1>
          <h4 className='font-normal text-sm'>
            {content}
          </h4>

          <h4 className='font-light'>
            {year}
          </h4>
        </div>
      </div>
      <div className='horizontal w-[50px] h-[2px] bg-white'></div>
    </div>
  );
};

export default Rightcard;
