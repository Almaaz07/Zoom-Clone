'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { SidebarLinks } from '@/constants/intex'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
const MobNav = () => {
    const pathname = usePathname()
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image src="/icons/hamburger.svg"
                        width={24}
                        height={24}
                        alt='ham' className='cursor-pointer sm:hidden' />
                </SheetTrigger >
                <SheetContent side="left" className='border-none bg-dark-1'>
                    <Link href="/" className='flex items-center gap-1'>
                        <Image src="/icons/logo.svg"
                            alt='logo'
                            width={32}
                            height={32}
                            className='max-sm:size-10 ' />
                        <p className='text-[26px] font-extrabold text-white'>ZOOM</p>

                    </Link>

<div className='flex h-[clac(100vh-72px)] flex-col justify-between 
overflow-y-auto'>
<SheetClose asChild>
<section className='flex h-full flex-col gap-6 pt-16 text-white'>
{
            SidebarLinks.map((item)=>{
                
                const isActive = pathname===item.url
                return (
                    <div key={item.url}>
                     <SheetClose asChild key={item.url}>
                    <Link href={item.url} className={cn("flex gap-4 items-center p-4 rounded-lg w-full max-w-60", {
                        'bg-blue-500': isActive,
                    }) }>
                        {/* {item.lable} */}
                      <Image src={item.img} width={20} height={20} alt='icons'/>
                      <p className='text-lg font-semibold'> {item.lable} </p>
                    </Link>
                    </SheetClose>
                </div>
                )
            })
           }
</section>
</SheetClose>
</div>

                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobNav
