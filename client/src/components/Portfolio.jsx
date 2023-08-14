import React from 'react'
import raise from '../assets/raise.png'
import project from '../assets/project-plan.png'
import timeline from '../assets/timeline1.png'
import rating1 from '../assets/rating1.png'


const Portfolio = () => {
  return (
    <div className='h-[180px] bg-[#FAFFFB]justify-center items-center'>
        <div className='flex h-[220px] bg-[#FAFFFB] justify-center items-center p-8 mt-10'>
         <div className='border-r-2 border-[#C4C4C480] grid place-items-center px-8'>
            <img src={project} alt=''/>
            <p className='text-[#000] text-[15px] font-medium leading-[32px]'>Completed Projects</p>
            <p className='text-[#20B15A] text-[30px] font-semibold leading-[32px] mt-4'><span className='p-[8px]'>100</span>+</p>
         </div>
         <div className='border-r-2 border-[#C4C4C480] grid place-items-center px-8'>
         <img src={rating1} alt=''/>
            <p className='text-[#000] text-[15px] font-medium leading-[32px]'>Completed Projects</p>
            <p className='text-[#20B15A] text-[30px] font-semibold leading-[32px] mt-4'><span className='p-[8px]'>20</span>%</p>
         </div>
         <div className='border-r-2 border-[#C4C4C480] grid place-items-center px-8'>
         <img className='' src={raise} alt=''/>
            <p className='text-[#000] text-[15px] font-medium leading-[32px]'>Completed Projects</p>
            <p className='text-[#20B15A] text-[30px] font-semibold leading-[32px] mt-4'>$10M</p>
         </div>
         <div className='grid place-items-center px-8'>
         <img src={timeline} alt=''/>
            <p className='flex text-[#000] text-[15px] font-medium leading-[32px]'>Completed Projects</p>
            <p className='text-[#20B15A] text-[30px] font-semibold leading-[32px] mt-4'><span className='p-[8px]'>2</span>yrs</p>
         </div>
        </div>    
    </div>
  )
}

export default Portfolio