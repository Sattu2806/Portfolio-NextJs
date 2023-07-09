import React from 'react'
import {AiOutlineTwitter, AiOutlineGithub} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {FiDribbble} from "react-icons/fi"



type Props = {}

const Container = (props: Props) => {
  return (
    <div className="lg:pt-16 pt-4 relative w-10/12 mx-auto">
        <div className='md:flex items-center justify-between flex-row-reverse'>
            <div className=' flex justify-end items-end max-md:pt-4'>
                <div className='relative'>
                <img className=' w-100% h-auto transform -scale-x-100' width={600} src="man.png" alt="" />
                <div className='w-[60%] overflow-hidden h-[70%] z-[-1] top-[10%] left-[20%] rounded-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400  absolute'></div>
                </div>
            </div>
            <div className='p-4 pl-0 mt-5 sm:mt-20'>
                <p className='text-xl sm:text-2xl  md:text-xl lg:text-2xl xl:text-3xl'>Hello</p>
                <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2  lg:pt-6'>I&apos;m Satender<p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl py-4'>A Front End Developer </p></h1>
                <p className='text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6'>bringing imagination to live website</p>
                {/* <div className='pt-10'>
                    <p className='px-3 py-1 before:bg-white shadow-md bg-slate-400 inline-block'>Hire</p>
                    <button className="pushable">
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front">
                            Hire Now!
                        </span>
                    </button>
                </div> */}
                <div className='flex items-center mt-6 md:mt-14'>
                    <ul className='flex items-center space-x-2 sm:space-x-5 mr-6 my-4 '>
                        <li><a href="" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><AiOutlineTwitter size={24}/></a></li>
                        <li><a href="" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><GrInstagram size={24}/></a></li>
                        <li><a href="" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><FiDribbble size={24}/></a></li>
                        <li><a href="" className='hover:opacity-100 opacity-75 transition ease-in duration-150'><AiOutlineGithub size={24}/></a></li>
                    </ul>
                    <a href="mailto:satendermaurya1222@gmail.com" className='px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]'>Email me</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container