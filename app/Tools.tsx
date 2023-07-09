import React from 'react'

type Props = {}

const Tools = (props: Props) => {
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>Tools</h1>
        <p className='pt-6 text-neutral-300'>The products, apps and services I use on a daily basis for work and life.</p>
        <div className='mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10'>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="planetscale.jpg" alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Planetscale</h1>
                    <p className='text-neutral-400'>My daily website&lsquo;s database platform</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="icon-figma.png" alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Figma</h1>
                    <p className='text-neutral-400'>My design tool of choice</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="vscode.png" alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Vs Code</h1>
                    <p className='text-neutral-400'>Use for Most of my developed Apps</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="vercel.png" alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Vercel</h1>
                    <p className='text-neutral-400'>For deployement purposes</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="dribbble.png" alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Dribbble</h1>
                    <p className='text-neutral-400'>Daily Inspiration for my projects</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Tools