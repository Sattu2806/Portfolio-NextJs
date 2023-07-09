'use client'
import React, {useState} from 'react'
import {BsArrowUpRight} from "react-icons/bs"

type Props = {}

const Projects = (props: Props) => {
    const [selectedId, setSelectedId] = useState<boolean>(false)
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>Projects</h1>
        <p className='pt-6 text-neutral-300'>Over the years, I have gained experience in designing and developing a variety of websites, ranging from simple one-page landing pages to complex multi-page applications.Here are some projects that I would like to present to all of you, showcasing my work and achievements in the field of web design and development.</p>
        {/* <div className='w-10/12 box1 max-md:mt-[-50px] mt-0'></div> */}
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="project.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>Landing Page</h1>
                <div className='text-neutral-300'>A landing page for designers made with basic html, css with great color combination.</div>
                <div className='mt-6 inline-block'><a href="" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="project3.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>React:News Website</h1>
                <div className='text-neutral-300'>A news website using the React framework, which continuously provides the latest updates and discussions from around the world. <h1 className='mt-4'> This dynamic platform utilizes real-time data fetching from the Yahoo News API, ensuring that users are constantly informed with up-to-date news content.</h1></div>
                <div className='mt-6 inline-block'><a href="" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="project1.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>Hotel Booking App</h1>
                <div className='text-neutral-300'>The hotel booking app is built with Next.js and utilizes Tailwind CSS for styling. It integrates MongoDB for database management and Prisma Cloudinary for efficient image storage. <h1 className='mt-4'>This combination of technologies enables seamless and user-friendly hotel booking experiences, delivering a robust and visually appealing application.</h1></div>
                <div className='mt-6 inline-block'><a href="" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
    </div>
  )
}

export default Projects