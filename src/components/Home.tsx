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
            <div
                // style={{ background: 'url(/slides/cover1.jpg)', objectFit: 'cover', objectPosition: 'center' }}
                className='h-[70vh] bg-[url("/slides/home.png")] bg-cover bg-no-repeat w-full grid items-center z-0 '>

                {/* <div style={{background: 'url(/slides/cover1.jpg)'}} className='object-cover flex content-center absolute w-full h-full'>
                    <Image src='/slides/cover1.jpg' fill alt='' className='object-cover content-center z-0' />
                </div> */}

                <Animasyon delay={500}>
                    <div className='z-20 w-full duration-500 hover:scale-95 max-w-5xl mx-auto flex gap-4 p-5 bg-sky-500 bg-opacity-60 shadow-lg'>
                        <div className='grid grid-cols-2 md:grid-cols-4 lg:ring-2 ring-white gap-2 md:gap-4 items-center backdrop-blur-sm p-2 md:p-6'>
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
            <div className='p-6 bg-gradient-to-tr from-green-100 via-red-100 to-blue-100 min-h-[50vh] w-full' ref={targetRef}>
                <h1 className='text-center text-4xl py-10 font-semibold'>Popular Destinations</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto w-full md:p-4 gap-6 items-center'>
                    {hotels.map((item: any, index: number) => (
                        <RoomCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}