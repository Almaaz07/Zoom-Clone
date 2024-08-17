"use client"
import React from 'react'
import { SidebarLinks } from '@/constants/intex'
import Link  from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
const Sidebar = () => {

const pathname = usePathname()

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>

        <div className='flex flex-col gap-5'>
           {
            SidebarLinks.map((item)=>{
                const isActive = pathname===item.url || pathname.startsWith(`${item.url}/`)
                return (
                    
                <div key={item.url}>
                    <Link href={item.url} className={cn("flex gap-4 items-center p-4 rounded-lg justify-start", {
                        'bg-blue-500': isActive,
                    }) }>
                        {/* {item.lable} */}
                      <Image src={item.img} width={24} height={24} alt='icons'/>
                      <p className='text-lg font-semibold max-lg:hidden'> {item.lable} </p>
                    </Link>
                </div>
                )
            })
           }
        </div>
    </section>
  )
}

export default Sidebar
