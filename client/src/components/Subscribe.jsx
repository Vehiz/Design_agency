import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex justify-center items-center m-10'>
        <div className='grid justify-center items-center gap-[40px] p-10'>
            <div className='flex flex-col gap-[15px] justify-center '>
                <p className='text-[#20B15A] text-center'>SUBSCRIBE</p>
                <p className='text-center'>Subscribe To Get The latest<br/> News About Us</p>
                <p className='text-[12px] '>Please Drop your Email Below To Get Daily Update About What We Do</p>
            </div>
            <div className='flex rounded-[14px] w-[435px] py-1 justify-around border-2 border-[]'>
                <input className='items-center w-[400px] rounded-[12px] px-2 gap-[10px]' type="text" placeholder="Enter Your Email Address" />
                <button className='bg-[#F55F1D] text-white p-2 mr-1 rounded-md'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe