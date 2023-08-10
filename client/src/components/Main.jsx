import React from 'react'
import Heart from '../assets/Heart.svg'
import Activity from '../assets/Activity.svg'
import Work from '../assets/Work.svg'
import Vector from '../assets/Vector.svg'


const Main = () => {
  return (
    <div className='bg-[#FFFFFF]'>
        <div>
            <div className='m-10'>
                <p className='text-[#20B15A] py-4' >WHAT WE DO</p>
                <p className='text-[#000000] text-[30px] font-semibold leading-[32px]'>We provide the perfect solution<br/> to your business growth</p>
            </div>
            <div className='flex justify-center space-x-20 content-between py-8 my-8'>
                <div className=''>
                    <div className='flex bg-[#D7F5DC] w-[50px] justify-center p-[15px] rounded-[10px]'><img src={Activity} alt=''/></div>
                    <p className='text-[#000] py-4 font-semibold text-[20px]'>Grow your business</p>
                    <p>We help identify the best way to grow a business</p>
                    <p>Improve your business</p>
                    <div className='flex mt-8'>Learn more <img className='p-[5px]'src={Vector} alt=''/></div>
                </div>
                <div className=' '>
                    <div className='flex bg-[#D7F5DC] w-[50px] justify-center p-[15px] rounded-[10px]'><img src={Heart} alt=''/></div>
                    <p className='text-[#000] py-4 font-semibold text-[20px]'>Grow your business</p>
                    <p>We help identify the best way to grow a business</p>
                    <p>Improve your business</p>
                    <div className='flex mt-8'>Learn more <img className='p-[5px]'src={Vector} alt=''/></div>
                </div>
                <div className=' '>
                    <div className='flex bg-[#D7F5DC] w-[50px] justify-center p-[15px] rounded-[10px]'><img src={Work} alt=''/></div>
                    <p className='text-[#000] py-4 font-semibold text-[20px]'>Grow your business</p>
                    <p>We help identify the best way to grow a business</p>
                    <p>Improve your business</p>
                    <div className='flex mt-8'>Learn more <img className='p-[5px]'src={Vector} alt=''/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main