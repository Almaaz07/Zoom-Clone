import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
const Homelayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='flex'>
            <Navbar/>

            <div className='sidebar'>
                <Sidebar/>
            </div>

            <section className='flex min-h-screen flex-1 flex-col px-6 pb:6 pt-28 max-md:pb-14 sm:px:14'>


                <div className='w-full'>
                    {children}
                </div>
            </section>

        </main>
    )
}

export default Homelayout
