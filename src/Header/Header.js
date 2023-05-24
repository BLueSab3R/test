import React from 'react'

const Header = () => {
  return (
    <div className='header flex justify-between items-baseline border-b-2 border-black'>
      <div className="logo mt-6 flex mx-20">
        <img src='./images/Logomark.svg' className='h-12 mt-2.5 mr-2' />
        <img src='./images/VooDooTest.svg' />

      </div>
      <div className="navigation text-[21px] flex mr-20">
        <button className='mx-5 font-bold  about-us'>About us</button>
        <button className="rounded sign-up-header text-center font-bold bg-black text-white hover:bg-orange">
          Sign-up
        </button>

      </div>
    </div>


  )
}

export default Header
