import React from "react";

const Heading = (props) => {
  const { content } = props;
  return (
    <h1
      className="text-5xl text-[#FEFFFF] font-bold tracking-wider left-0 w-full mb-10"
      style={{ textShadow: "2px 4px 8px rgba(0, 0, 0, 0.5)" }}
    >
      {content}
    </h1>
  );
};

export default Heading;
