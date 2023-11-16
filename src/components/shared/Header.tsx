"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import axios from 'axios'

type Props = {
    setIsLoggedin: any
}

const API_BASE_URL = 'https://reqres.in/api';

export function Header(props: Props) {

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [token, setToken] = React.useState('');

    const handleLogout = async () => {
        try {
            await axios.post(`${API_BASE_URL}/logout`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            localStorage.removeItem('token')
            setToken('');
            props.setIsLoggedin(false)
            alert('Logout successful!');

        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <header className="bg-white">
            {/* PC View */}
            <nav className="mx-auto flex max-w-7xl px-4 py-4 lg:py-6" aria-label="Global">
                <div className="flex w-full lg:w-auto justify-between items-center">
                    <div className='relative h-12 w-14'>
                        <Image
                            fill
                            src="/logo.png"
                            alt="logo"
                        />
                    </div>
                    <button
                        type="button"
                        className="lg:hidden rounded-md p-2.5 text-black"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="h-8 w-8 text-black group-hover:text-indigo-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12 w-full items-center justify-center">

                    <Link href="/about" className="text-md font-semibold leading-6 text-black">
                        About
                    </Link>
                    <Link href="/destinations" className="text-md font-semibold leading-6 text-black">
                        Destinations
                    </Link>
                    <Link href="/contact" className="text-md font-semibold leading-6 text-black">
                        Contact
                    </Link>

                </Popover.Group>
                <Popover.Group className='flex items-center'>
                    <div className="hidden items-center duration-300 lg:flex">
                        <Popover className="relative">
                            <Popover.Button className="flex items-center outline-none focus:ring-0 leading-6 text-black hover:text-pink-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                </svg>
                            </Popover.Button>

                            <Transition
                                as={React.Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute p-3 right-0 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">

                                    <div className="group relative flex items-center gap-x-2 rounded-lg p-3 leading-6 hover:bg-pink-100 hover:text-pink-700">
                                        <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <Link href='/profile' className="block text-md font-semibold">
                                            Profile
                                            <span className="absolute inset-0" />
                                        </Link>
                                    </div>

                                    <div className="group relative flex items-center gap-x-2 rounded-lg p-3 leading-6 hover:bg-pink-100 hover:text-pink-700">
                                        <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <button type='button' onClick={handleLogout} className="block text-md font-semibold">
                                            Logout
                                            <span className="absolute inset-0" />
                                        </button>
                                    </div>

                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </div>
                </Popover.Group>
            </nav>

            {/* Mobile views */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full h-[50vh] sm:h-full overflow-y-auto bg-gradient-to-tr from-red-100 to-green-100 px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href='/' className='relative sm:hidden w-14 h-12'>
                            <Image
                                fill
                                src="/logo.png"
                                alt="logo"
                            />
                        </Link>

                        <button
                            type="button"
                            className="rounded-md p-2.5 text-black"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <Link href="#" className="flex gap-2 bg-white bg-opacity-50 shadow-md rounded-lg px-3 py-2 text-md font-semibold leading-7 text-black hover:bg-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                                    </svg>
                                    <span>About</span>
                                </Link>
                                <Link href="#" className="flex gap-2 bg-white bg-opacity-50 shadow-md rounded-lg px-3 py-2 text-md font-semibold leading-7 text-black hover:bg-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>

                                    <span>Destinations</span>
                                </Link>
                                <Link href="#" className="flex gap-2 bg-white bg-opacity-50 shadow-md rounded-lg px-3 py-2 text-md font-semibold leading-7 text-black hover:bg-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                    </svg>

                                    <span>Contact</span>
                                </Link>
                                <div>
                                    <button
                                        className="flex gap-2 rounded-lg px-3 bg-white bg-opacity-50 shadow-md py-2 w-full text-md font-semibold leading-7 text-black hover:bg-gray-50"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                        </svg>
                                        <span>Profile</span>
                                    </button>
                                </div>
                                <div>
                                    <button type='button' onClick={handleLogout}
                                        className="flex gap-2 rounded-lg px-3 bg-white bg-opacity-50 shadow-md py-2 w-full text-md font-semibold leading-7 text-black hover:bg-gray-50"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                        </svg>
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
