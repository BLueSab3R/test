import React, { useState } from 'react'

const Elements = ({ title, handle, image, variants }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`flex  card flex-col p-[30px] m-8 ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="border border-black shadow-lg relative">
        <img src={image[0].src} className="w-300 card-img h-300" />
        <button className="absolute top-2 left-2 bg-black text-white rounded-md px-2 py-1">
          USED
        </button>
      </div>
      <div className="text grid grid-cols-2">
        <div>
          <div className="font-bold">{title}</div>
          <div className="font-bold mt-1">{variants[1].price}KR.</div>
        </div>
        <div className="second flex flex-col items-end">
          <div>Condition</div>
          <div className="mt-auto"> Slighty used</div>
        </div>
      </div>
      {hovered && (
        <button className='bg-black pick-up rounded-md text-white'>PICK-UP in <span className="underline">2200</span></button>
      )}
    </div>
  )
}

export default Elements