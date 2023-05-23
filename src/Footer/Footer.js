import React from 'react'

const Footer = () => {
  return (
    <div className='footer font-spaceMono font-bold bg-white flex justify-around items-center'>
      <img src='Logomark.svg' className='logoMark'></img>
      <div className="footer-links">
        <ul>
          <li className='text-black'>FAQ</li>
          <li className='text-black'>RETURNS</li>
          <li className='text-black'>CONTACT</li>
        </ul>
      </div>
      <div className="footer-links">
        <ul>
          <li className='text-black'>TERMS & CONDITIONS</li>
          <li className='text-black'>PRIVACY POLICY</li>
          <li className='text-black'>COOKIE POLICY</li>
          <li className='text-black'>COOKIE SETTINGS</li>
        </ul>
      </div>
      <div className="footer-links">
        <ul>
          <li className='text-black'>ABOUT SECOND CHANCE</li>
          <li className='text-black'>CAREER</li>
          <li className='text-black'>FACEBOOK</li>
          <li className='text-black'>INSTAGRAM</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
