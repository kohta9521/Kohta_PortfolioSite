import Link from 'next/link'

// react-icons
import { AiFillInstagram } from 'react-icons/Ai';
import { AiFillFacebook } from 'react-icons/Ai';
import { AiFillTwitterSquare } from 'react-icons/Ai';

export default function Sidebar() {
    return (
        <>
            <div className='absolute top-0 z-0  h-screen w-36  bg-indigo-600 bg-opacity-10'>
                <div className='w-full h-auto mt-56'>
                    <ul>
                        <li className='block w-full text-center text-xl font-mono'>
                            <Link href="/" className='text-white'>
                                Home
                            </Link>
                        </li>
                        <li className='block w-full text-center mt-9 text-xl font-mono'>
                            <Link href="/" className='text-white '>
                                Works
                            </Link>
                        </li>
                        <li className='block w-full text-center mt-9 text-xl font-mono'>
                            <Link href="/" className='text-white '>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='absolute bottom-5  w-full h-auto'>
                    <ul className='flex justify-around'>
                        <li>
                            <Link href="https://www.instagram.com/k_95.21/">
                                <AiFillInstagram 
                                    className=" text-3xl"
                                    color="white"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/profile.php?id=100023803485755">
                                <AiFillFacebook 
                                    className=" text-3xl"
                                    color="white"                                
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/kohta_piano">
                                <AiFillTwitterSquare 
                                    className=" text-3xl"
                                    color="white"                                
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}