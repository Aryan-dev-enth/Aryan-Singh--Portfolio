import React from "react";

const Navoptions = (props) => {
  const { content } = props;
  return (
    <div className="w-4/5 h-auto py-1 hover:bg-[#2B7A78] transition-all duration-500 cursor-pointer ">
      <h4 className="text-white">{content}</h4>
    </div>
  );
};

export default Navoptions;
