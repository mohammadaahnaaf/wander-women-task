"use client"

import React from 'react'
import { Header } from '@women/components'
import Router from 'next/router'

type Props = {}

export const Home = (props: Props) => {

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
            alert("Your tour is saved"),
            localStorage.setItem('destination', destination)
        )
    }

    return (
        <div className='min-h-[70vh] w-full'>
            <Header setIsLoggedin={(x: boolean) => setIsLoggedin(x)} />
            <div className='h-full w-full grid items-center bg-gradient-to-tr from-green-100 via-red-100 to-blue-100'>
                <div className='w-full max-w-5xl mx-auto flex gap-4 p-5 bg-pink-500 bg-opacity-25 shadow-lg'>

                    <div className='grid grid-cols-2 md:grid-cols-4 lg:ring-2 ring-white gap-2 md:gap-4 items-center backdrop-blur-sm p-2 md:p-6'>
                        <div className='col-span-2 md:col-span-4 text-center'>
                            <h1 className='text-pink-800 font-semibold text-2xl'>Book A Spot Now</h1>
                        </div>
                        <div className='grid items-end'>
                            <label htmlFor='date' className='text-pink-800 text-sm font-semibold mb-2'>Check in Date</label>
                            <input name='date' value={destination.date || ''} onChange={(e) => handleChange(e)} className='bg-[red] hover:bg-opacity-60 bg-opacity-50 p-2.5 outline-none w-full ring-white ring-2 text-white' type='date' placeholder='Check-in' />
                        </div>
                        <div className='grid items-end'>
                            <label htmlFor='members' className='text-pink-800 text-sm font-semibold mb-2'>Number of Members</label>
                            <input name='members' value={destination.members || 1} onChange={(e) => handleChange(e)} className='bg-[red] hover:bg-opacity-60 bg-opacity-50 p-2.5 w-full outline-none ring-white ring-2 text-white' type='number' placeholder='' />
                        </div>
                        <div className='grid items-end'>
                            <label htmlFor='type' className='text-pink-800 text-sm font-semibold mb-2'>Room Type</label>
                            <select name='type' value={destination.type || ''} onChange={(e) => handleChange(e)} className='bg-[red] hover:bg-opacity-60 bg-opacity-50 p-2.5 w-full outline-none ring-white text-white ring-2' placeholder=''>
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
                                className='text-white w-full bg-[red] bg-opacity-50 hover:bg-opacity-60 p-2.5 ring-2 ring-white'>Find</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}