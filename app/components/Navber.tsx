import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { SignIn } from './auth-component';
import { auth } from '@/auth';

const Navber = async () => {
    const session = await auth();
console.log(session?.user);

    const user = true;

    return (
        <header className='bg-gray-800 text-white p-4'>
            <nav className='container mx-auto flex justify-between'>
                <div className='text-lg font-semibold'>
                    <Link href={"/"}>LOGO</Link>
                </div>
                {/* navigatioina item */}
                <ul className='flex space-x-6 items-center'>
                    <li><Link href={"/"} className='hover:text-yellow-500'>HOME</Link></li>
                    <li><Link href={"/about"} className='hover:text-yellow-500'>ABOUT</Link></li>
                    <li><Link href={"/dashboard"} className='hover:text-yellow-500'>DASHBOARD</Link></li>
                    <li><Link href={"/contact"} className='hover:text-yellow-500'>CONTACT</Link></li>

                </ul>
                {
                    user ? <div className='space-x-4 flex items-center'>
                        <Link href={"/profile"}>
                        <Image src={`${session.user.image}`} alt="User Avatar" width={40} height={40} /></Link>
                       
                        <button className='bg-blue-400 hover:bg-yellow-500 text-white px-6 rounded-full'>Log out</button>
                    </div> : <div>
                        <div className='bg-blue-400 hover:bg-yellow-500 text-white px-6 rounded-full'><SignIn></SignIn></div>
                    </div>
                }
            </nav>
        </header>
    )
}

export default Navber