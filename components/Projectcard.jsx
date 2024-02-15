import React from 'react'

const Projectcard = ({title, content, logoImg}) => {
  return (
    <div className='mainArea w-full h-full bg-[#DEF2F1] flex justify-between items-center px-10 rounded-md'>
        <div className="left w-3/4 h-full flex flex-col justify-center items-start px-10">
          <h1 className='text-xl font-semibold'>
            {title}
          </h1>
          <h4>
            {content}
          </h4>
          <button className="text-[#DEF2F1] text-sm bg-[#2B7A78] px-2 py-1 rounded-md shadow-sm shadow-black hover:bg-[#DEF2F1] hover:text-[#2B7A78] transition-all mt-10">
            OPEN IN GITHUB
          </button>
        </div>
        <div className="right flex items-center justify-center">
          <img src={logoImg} alt="" width={80}/>
        </div>
    </div>
  )
}

export default Projectcard