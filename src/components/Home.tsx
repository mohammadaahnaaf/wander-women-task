"use client"

import React from 'react'
import { Animasyon, Header, RoomCard } from '@women/components'
import Router from 'next/router'
import Image from 'next/image'
import { hotels } from '@women/data'

type Props = {}

export const Home = (props: Props) => {

    const targetRef = React.useRef<HTMLDivElement>(null);
    const [destination, setDestination] = React.useState<any>({})
    const [isLoggedin, setIsLoggedin] = React.useState<boolean>(true)

    React.useEffect(() => {

        let theToken = localStorage.getItem('token')
        setIsLoggedin(!!theToken)

        let type = localStorage.getItem('type')
        let members = localStorage.getItem('members')
        let date = localStorage.getItem('date')

        !!type &&
            setDestination({
                date: date,
                members: members,
                type: type
            })
    }, [])

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setDestination((prevDes: any) => ({
            ...prevDes,
            [name]: value
        }));
    };

    function handleSave() {
        !isLoggedin ? (
            localStorage.setItem('type', destination.type),
            localStorage.setItem('date', destination.date),
            localStorage.setItem('members', destination.members),
            // console.log('ok')
            Router.push('/login')
        ) : (
            localStorage.setItem('type', destination.type),
            localStorage.setItem('date', destination.date),
            localStorage.setItem('members', destination.members)
            // alert("Your tour is saved")
        )
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className=' w-full'>
            <Animasyon delay={300}>
                <Header setIsLoggedin={(x: boolean) => setIsLoggedin(x)} />
            </Animasyon>
            <div className='h-[70vh] bg-[url("/slides/home.png")] bg-cover bg-no-repeat w-full grid items-center z-0 '>

                <Animasyon delay={500}>
                    <div className='z-20 w-full duration-500 hover:scale-95 max-w-5xl mx-auto flex gap-4 p-5 bg-sky-500 bg-opacity-60 shadow-lg'>
                        <div className='grid w-full grid-cols-2 md:grid-cols-4 lg:ring-2 ring-white gap-2 md:gap-4 items-center backdrop-blur-sm p-2 md:p-6'>
                            <div className='col-span-2 md:col-span-4 text-center'>
                                <h1 className='text-white font-semibold text-2xl'>Book A Spot Now</h1>
                            </div>
                            <div className='grid items-end'>
                                <label htmlFor='date' className='text-white text-md font-semibold mb-2'>Check in Date</label>
                                <input name='date' value={destination.date || ''} onChange={(e) => handleChange(e)} className='bg-[blue] hover:bg-opacity-60 bg-opacity-50 p-2.5 outline-none w-full ring-white ring-2 text-white' type='date' placeholder='Check-in' />
                            </div>
                            <div className='grid items-end'>
                                <label htmlFor='members' className='text-white text-md font-semibold mb-2'>Number of Members</label>
                                <input name='members' value={destination.members || 1} onChange={(e) => handleChange(e)} className='bg-[blue] hover:bg-opacity-60 bg-opacity-50 p-2.5 w-full outline-none ring-white ring-2 text-white' type='number' placeholder='' />
                            </div>
                            <div className='grid items-end'>
                                <label htmlFor='type' className='text-white text-md font-semibold mb-2'>Room Type</label>
                                <select name='type' value={destination.type || ''} onChange={(e) => handleChange(e)} className='bg-[blue] hover:bg-opacity-60 bg-opacity-50 p-2.5 w-full outline-none ring-white text-white ring-2' placeholder=''>
                                    <option value='family'>Family</option>
                                    <option value='single'>Single</option>
                                    <option value='dual-bed'>Dual Bed</option>
                                    <option value='large'>Large</option>
                                </select>
                            </div>
                            <div className='col-span-1 items-end h-full grid w-full'>
                                <label className='text-transparent w-full text-sm font-semibold mb-2'>Type</label>
                                <button type='button'
                                    onClick={handleSave}
                                    className='text-white w-full bg-[blue] bg-opacity-50 hover:bg-opacity-60 p-2.5 ring-2 ring-white'>Find</button>
                            </div>
                        </div>
                    </div>
                </Animasyon>
            </div>
            <div className='p-6 bg-gradient-to-tr from-green-100 via-red-100 to-blue-100 w-full' ref={targetRef}>
                <h1 className='text-center text-4xl py-10 font-semibold'>Popular Destinations</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto w-full md:p-4 gap-6 items-center'>
                    {hotels.map((item: any, index: number) => (
                        <RoomCard key={index} item={item} />
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-bl from-teal-100 to-green-100 via-rose-100 py-10">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="py-6 text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl">Sign up for our newsletter</h2>
                        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                        <form action="#">
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input className="block p-3 pl-10 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />
                                </div>
                                <div>
                                    <button type="submit" className="py-3 px-5 w-full text-md font-medium text-center text-white rounded-lg border cursor-pointer bg-teal-600 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">Subscribe</button>
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}