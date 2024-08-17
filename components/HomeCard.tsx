import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
interface HomeCardProps{
    className:string,
    img:string,
    title:string,
    description:string,
    handleClick:()=> void,

}


const HomeCard = ({img , className , title , description , handleClick} : HomeCardProps) => {
  return (
    <div className={cn('flex flex-col bg-[#f05d0e] w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] px-4 py-6 justify-between cursor-pointer' , className)}
    onClick={handleClick}
    > 
    <div className=' flex-center glassmorphism size-12 rounded-xl'>
<Image src={img}
width={20}
height={20}
alt='img'
/>
    </div>
<div className='flex flex-col gap-2'>
<h1 className='text-2xl font-bold'>{title}</h1>
<p className='text-lg font-normal'>{description}</p>
</div>
    </div>
  )
}

export default HomeCard
