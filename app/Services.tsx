import React from 'react'
import {MdDesignServices, MdDeveloperMode} from "react-icons/md"
import {AiOutlineFieldTime} from'react-icons/ai';

type Props = {}

const Services = (props: Props) => {
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold mb-10'>Services</h1>
        <div className='flex max-md:flex-wrap gap-7 justify-between'>
            <div className='d p-5 relativ overflow-hidden mt-5'>
                <h1 className='text-center mt-5'>UI/UX Design</h1>
                <div className='flex justify-center mt-4'>
                    <MdDesignServices className='text-pink-600' size={28}/>
                </div>
                <p className='text-center mt-10 text-neutral-300'><span className=' text-xl font-bold '>ui/ux</span> designer creating compelling user interface</p>
                <p className='text-center  mt-10 mb-7'><a href="" className='px-4 py-2 rounded-sm border-[0.5px] border-[#363636] shadow-md text-gray-400 hover:text-green-500'>know more</a></p>
                <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 '></span>
                <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-pink-600 absolute top-[27%] '></span>
                <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 '></span>
                <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 '></span>
            </div>
            <div className='d p-5 relativ overflow-hidden  mt-5'>
                <h1 className='text-center mt-5'>Clean & Organised Code</h1>
                <div className='flex justify-center mt-4'>
                    <MdDeveloperMode className='text-blue-600' size={28}/>
                </div>
                <p className='text-center mt-10 text-neutral-300'><span className=' text-xl font-bold '>ui/ux</span> designer creating compelling user interface</p>
                <p className='text-center  mt-10 mb-7'><a href="" className='px-4 py-2 rounded-sm border-[0.5px] border-[#363636] shadow-md text-gray-400 hover:text-green-500'>know more</a></p>
                <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 '></span>
                <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-blue-600 absolute top-[27%] '></span>
                <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 '></span>
                <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 '></span>
            </div>
            <div className='d p-5 relativ overflow-hidden  mt-5'>
                <h1 className='text-center mt-5'>Fast Delivery</h1>
                <div className='flex justify-center mt-4'>
                    <AiOutlineFieldTime className='text-yellow-500' size={28}/>
                </div>
                <p className='text-center mt-10 text-neutral-300'><span className=' text-xl font-bold '>ui/ux</span> designer creating compelling user interface</p>
                <p className='text-center  mt-10 mb-7'><a href="" className='px-4 py-2 rounded-sm border-[0.5px] border-[#363636] shadow-md text-gray-400 hover:text-green-500'>know more</a></p>
                <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 '></span>
                <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-yellow-600 absolute top-[27%] '></span>
                <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 '></span>
                <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 '></span>
            </div>
        </div>
    </div>
  )
}

export default Services