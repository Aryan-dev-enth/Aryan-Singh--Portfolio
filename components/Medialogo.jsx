import React from "react";

const Medialogo = (props) => {
  const { imgURL, dimension, trans_bg } = props;
  return (
    <div className={`linked w-[50px] h-[50px] bg-[#2B7A78] rounded-full flex items-center justify-center p-0.5 hover:bg-[${trans_bg}] hover:scale-105 cursor-pointer transition-all`}>
      <img src={imgURL} alt="" width={dimension} height={dimension}/>
    </div>
  );
};

export default Medialogo;
