import React from 'react'
import { Header, Slides } from '.'
import Image from 'next/image'

type Props = {
    data: any
}

const images = ['/turkiye/one.jpg', '/turkiye/two.jpg', '/turkiye/three.jpg', '/turkiye/four.jpg'];


export const Destinations = (props: Props) => {

    const [isLoggedin, setIsLoggedin] = React.useState<boolean>(true)
    let basics = props.data.basics

    return (
        <div className='min-h-screen'>
            <Header setIsLoggedin={(x: boolean) => setIsLoggedin(x)} />
            <Slides
                images={props.data.images}
                title={props.data.title}
                subtitle={props.data.subTitle}
            />
            <div className='w-full py-5 md:py-10 px-4 max-w-7xl mx-auto grid gap-4 grid-cols-5'>
                <div className='md:col-span-3 col-span-5'>
                    <div className='md:h-2/3 h-[300px] col-span-4 w-full relative'>
                        <Image src='/slides/cover6.jpg' fill alt='iamge-destinations' />
                    </div>
                    <div className='grid h-[200px] md:h-1/3 pt-4 gap-4 grid-cols-4'>
                        <div className='h-full col-span-1 w-full relative'>
                            <Image src='/slides/cover6.jpg' fill alt='iamge-destinations' />
                        </div>
                        <div className='h-full col-span-1 w-full relative'>
                            <Image src='/slides/cover6.jpg' fill alt='iamge-destinations' />
                        </div>
                        <div className='h-full col-span-1 w-full relative'>
                            <Image src='/slides/cover6.jpg' fill alt='iamge-destinations' />
                        </div>
                        <div className='h-full col-span-1 w-full relative'>
                            <Image src='/slides/cover6.jpg' fill alt='iamge-destinations' />
                        </div>
                    </div>
                </div>
                <div className='md:col-span-2 min-h-[50vh] bg-green-100 col-span-5'>
                    <h1 className='text-lg flex gap-1 items-center font-semibold pt-4 px-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        City Map
                    </h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770815.1869053458!2d28.35278722508894!3d41.00344271660253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1sen!2sbd!4v1700159874768!5m2!1sen!2sbd"
                        width="100%" height="100%"
                        className='p-4 h-[50%]'
                        allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div>
                        <h1 className='text-lg flex gap-1 items-center font-semibold px-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                            Weather
                        </h1>

                    </div>
                </div>

            </div>

            <div className='max-w-7xl mx-auto p-6 w-full'>

                {/* about */}
                <div className='grid grid-cols-4 py-6'>
                    <div className='md:col-span-1 duration-300 hover:scale-95 relative col-span-4 flex items-center justify-center'>
                        <div className='grid'>
                            <div className='relative h-40 w-52'>
                                <Image className='rotate-12 w-10' src='/turkiye/three.jpg' fill alt='' />
                            </div>
                            <div className='relative h-40 w-52'>
                                <Image className='w-10 -rotate-12 bg-white p-1' src='/turkiye/two.jpg' fill alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-3  duration-300 hover:scale-95 col-span-4'>
                        <h1 className='text-xl md:text-3xl py-4 border-b text-blue-600 border-blue-600 font-bold'>About {props.data.name}</h1>
                        <h1 className='text-xl md:text-5xl py-4 font-bold'>Learn More About {props.data.name}</h1>
                        <p className='text-lg md:text-xl font-normal'>
                            {props.data.about}
                        </p>
                    </div>
                </div>

                {/* Basics */}
                <div className='grid grid-cols-4 py-6'>
                    <div className='md:col-span-3  duration-300 hover:scale-95 col-span-4'>
                        <h1 className='text-xl md:text-3xl py-4 border-b text-blue-600 border-blue-600 font-bold'>Basic Informations</h1>
                        <div className='grid grid-cols-3 font-semibold text-lg gap-4 p-6 bg-gray-100 shadow-lg rounded-md mt-4'>

                            <div className='col-span-1'>Country:</div><div className='col-span-2'>{basics.country}</div>
                            <div className='col-span-1'>Languages:</div><div className='col-span-2'>{basics.languages}</div>
                            <div className='col-span-1'>Currency:</div><div className='col-span-2'>{basics.currency}</div>
                            <div className='col-span-1'>Capital:</div><div className='col-span-2'>{basics.capital}</div>
                            <div className='col-span-1'>Time Zone:</div><div className='col-span-2'>{basics.timeZone}</div>
                            <div className='col-span-1'>Populations:</div> <div className='col-span-2'>{basics.population}</div>
                            <div className='col-span-1'>Best Time To Travel</div><div className='col-span-2'>{basics.timeToTravel}</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}