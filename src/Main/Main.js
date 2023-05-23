import React, { useState, useEffect } from 'react';
import Elements from './Elements';

const Main = () => {
  const [expanded, setExpanded] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://voodoo-sandbox.myshopify.com/products.json?limit=12');
        const data = await response.json();
        setProducts(data.products)
      } catch (error) {
        console.log('Error:', error)
      }
    };
    fetchData();
    setLoading(!loading);
  }, [])
  console.log(products);
  return (
    //   loading && 
    (
      <div className='flex main justify-center items-center flex-col p-12 border-b border-black'>
        <div className={`disclaimer flex flex-col mt-14 items-center   border rounded border-black cursor-pointer ${expanded ? 'expanded' : ''}`} onClick={handleExpand}>
          <div className="flex prev items-center justify-between  ml-3 gap-10px leading-[4rem]">
            <img src='alert-circle.svg' alt="Alert Circle" />
            <span className='text-white mx-2'>ALPHA</span>
            <div className="text mx-20">
              <span className='text-white text-center imp-info'>Important info regarding our service</span>
            </div>
            <div className="flex items-center ml-auto mr-4">
              <img src='chevron-down.svg' alt="Chevron Down" />
            </div>
          </div>
          {expanded && (
            <div className="disclaimer-content">
              <div className="expanded flex flex-col border-t border-white">
                <div className="flex h-14 items-center">
                  <span className='text-white'>We're working on a new service to offer you returned online goods at a discount near you.</span>
                </div>
                <div className="plans  justify-between	 border-t border-white flex p-2">
                  <div className="mx-20">
                    <span className='text-white text-[16px]'>CURRENTLY</span>
                    <ul>
                      <li className='text-white text-[14px]'>1. Very limited assortment of items that we resell</li>
                      <li className='text-white text-[14px]'>2. All sorts of product categories</li>
                      <li className='text-white text-[14px]'>3. Focus on testing the ordering and pick-up experience</li>
                    </ul>
                  </div>
                  <div className="img flex flex-col justify-evenly	mt-5">
                    <img src='Arrow 1.svg' className='mr-10 arr' alt="Arrow" />
                    <img src='Arrow 1.svg' className='mr-10 arr' alt="Arrow" />
                    <img src='Arrow 1.svg' className='mr-10 arr' alt="Arrow" />
                  </div>
                  <div className="mx-20">
                    <span className='text-white text-[16px]'>FUTURE</span>
                    <ul>
                      <li className='text-white text-[14px]'>1. Returned items from other shoppers</li>
                      <li className='text-white text-[14px]'>2. Select product categories</li>
                      <li className='text-white text-[14px]'>3. Focus on end-to-end service experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>



        <div className="flex flex-wrap justify-center items-center gap-12px">
          {products.slice(1).map((product) => (
            <Elements
              key={product.id}
              title={product.title}
              variants={product.variants}
              handle={product.handle}
              image={product.images}
            />
          ))}
        </div>
        <div className="subscribe flex flex-col ">
          <span className='text-[20px]'>Be the first one to know when we launch our beta!</span>
          <div className="inputs mr-10 flex">
            <input
              placeholder='E-mail'
              className='input font-bold text-lg text-black placeholder-black bg-white border rounded px-4 py-2'
            />
            <button className='sign-up-main rounded mx-2 text-black'>
              Sign-up
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Main;
