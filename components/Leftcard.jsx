import React from 'react';

const Leftcard = ({ style, title, content, year, logoImg }) => {
  return (
    <div className='h-full w-full  flex items-center' style={style}>
      <div className='h-[120px] bg-[#DEF2F1] w-[500px] rounded-r-full ml-[115px] shadow-lg shadow-black flex  items-center justify-between px-7 gap-5'>
        <div className="left">
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
        <div className="right">
          <img src={logoImg} alt=""  width={50}/>
        </div>
      </div>
      <div className='horizontal w-[50px] h-[2px] bg-white'></div>
    </div>
  );
};

export default Leftcard;
