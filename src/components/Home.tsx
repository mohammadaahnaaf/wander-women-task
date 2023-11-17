"use client"

import React from 'react'
import { Animasyon, Header, RoomCard, TourCard } from '@women/components'
import Router from 'next/router'
import Image from 'next/image'
import { hotels, slides, tours } from '@women/data'

type Props = {}

export const Home = (props: Props) => {

    const targetRef = React.useRef<HTMLDivElement>(null);
    const [destination, setDestination] = React.useState<any>({})
    const [isLoggedin, setIsLoggedin] = React.useState<boolean>(true)
    const [currentSlide, setCurrentSlide] = React.useState<number>(0);

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


    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentSlide]);

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

            {/* Popular */}
            <div className='p-6 bg-gradient-to-tr from-green-100 via-red-100 to-blue-100 w-full' ref={targetRef}>
                <h1 className='text-center text-4xl py-10 font-semibold'>Popular Destinations</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto w-full md:p-4 gap-6 items-center'>
                    {hotels.map((item: any, index: number) => (
                        <RoomCard key={index} item={item} />
                    ))}
                </div>
            </div>

            {/* Featured  */}
            <div className='p-6 w-full' ref={targetRef}>
                <h1 className='text-center text-4xl py-10 font-semibold'>Featured Tours</h1>
                <div className='grid grid-cols-2 lg:grid-cols-6 max-w-7xl mx-auto w-full md:p-4 gap-6 items-center'>
                    {tours.map((item: any, index: number) => (
                        <TourCard key={index} item={item} />
                    ))}
                </div>
            </div>

            {/* Testimonials  */}
            <div className='bg-gradient-to-bl from-teal-100 to-green-100 via-rose-100'>
                <div className=' max-w-7xl mx-auto w-full '>

                    {slides.map((x: any, index: number) => {
                        return index === currentSlide ? (
                            <div key={index} className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                                <figure className="max-w-screen-md mx-auto">
                                    <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                    </svg>
                                    <blockquote>
                                        <p className="text-2xl font-medium text-gray-900">
                                            {x.comment}
                                        </p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                        <Image className="w-6 h-6 rounded-full" height='50' width='50' src={x.avatar} alt="profile picture" />
                                        <div className="flex items-center divide-x-2 divide-gray-500">
                                            <div className="pr-3 font-medium text-gray-900">{x.name}</div>
                                            <div className="pl-3 text-sm font-light text-gray-500">{x.title}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ) : null
                    })}

                </div>
            </div>

            {/* Newsletters  */}
            <div className="py-10">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="py-6 text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl">Sign up for our newsletter</h2>
                        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                        <div>
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input className="block p-3 pl-10 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />
                                </div>
                                <div>
                                    <button type="button" className="py-3 px-5 w-full text-md font-medium text-center text-white rounded-lg border cursor-pointer bg-teal-600 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">Subscribe</button>
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}