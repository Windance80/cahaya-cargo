'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex flex-row items-center justify-center text-center'>
                    <Image
                        src="/images/logo.png"
                        width={100}
                        height={100}
                        alt="Logo icon"
                    />
                    <h1 className="text-xl font-bold">Cahaya Cargo</h1>
                </div>

                {/* Hamburger Icon for Mobile */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
                {/* Menu Items */}
                <ul
                    className={`${isOpen ? "flex" : "hidden"
                        } md:flex flex-col md:flex-row md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out z-10`}
                >
                    <li>
                        <Link href="/" className="hover:underline block py-2 md:py-0">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/layanan" className="hover:underline block py-2 md:py-0">
                            Layanan
                        </Link>
                    </li>
                    <li>
                        <Link href="/hubungi-kami" className="hover:underline block py-2 md:py-0">
                            Hubungi Kami
                        </Link>
                    </li>
                </ul>

                {/* <ul className="flex space-x-6">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/layanan" className="hover:underline">Layanan</Link></li>
                    <li><Link href="/hubungi-kami" className="hover:underline">Hubungi Kami</Link></li>
                </ul> */}
            </div>
        </nav>
    );
}