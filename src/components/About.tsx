import React from 'react'
import { Header, Slides } from '.'
import Image from 'next/image';
import { slides } from '@women/data';

type Props = {}
const images = ['/slides/cover4.jpg', '/slides/cover7.jpg', '/slides/cover3.jpg', '/slides/cover5.jpg'];

export const About = (props: Props) => {

    const [currentSlide, setCurrentSlide] = React.useState<number>(0);
    const [isLoggedin, setIsLoggedin] = React.useState<boolean>(true)

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
        <div>
            <Header setIsLoggedin={(x: boolean) => setIsLoggedin(x)} />
            <Slides
                images={images}
                title='ABOUT WANDER WOMEN'
                subtitle='Wander Women is a women-centric travel and networking platform where we empower women to travel.'
            />
            <div className='max-w-7xl mx-auto w-full py-10 px-4'>
                {/* Why Wander Women  */}
                <div className='grid grid-cols-4 py-6'>
                    <div className='md:col-span-3  duration-300 hover:scale-95 col-span-4'>
                        <h1 className='text-xl md:text-3xl py-4 border-b text-blue-600 border-blue-600 font-bold'>About Us</h1>
                        <h1 className='text-xl md:text-5xl py-4 font-bold'>Why Wander Women?</h1>
                        <p className='text-lg md:text-xl font-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, ducimus dolorum eum quas hic non molestiae velit suscipit architecto, ea nam illo labore eveniet deserunt fugit est vel eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, ducimus dolorum eum quas hic non molestiae velit suscipit architecto, ea nam illo labore eveniet deserunt fugit est vel eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, ducimus dolorum eum quas hic non molestiae velit suscipit architecto, ea nam illo labore eveniet deserunt fugit est vel eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, ducimus dolorum eum quas hic non molestiae velit suscipit architecto, ea nam illo labore eveniet deserunt fugit est vel eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, ducimus dolorum eum quas hic non molestiae velit suscipit architecto, ea nam illo labore eveniet deserunt fugit est vel eos!

                        </p>
                    </div>
                    <div className='md:col-span-1 relative col-span-4 flex items-center justify-center'>
                        <div className='grid  duration-300 hover:scale-95'>
                            <div className='relative h-40 w-52'>
                                <Image className='rotate-12 w-10' src='/bali/five.jpg' fill alt='' />
                            </div>
                            <div className='relative h-40 w-52'>
                                <Image className='w-10 -rotate-12 bg-white p-1' src='/bali/four.jpg' fill alt='' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* our story  */}
                <div className='grid grid-cols-4 py-6'>
                    <div className='md:col-span-1 order-2 md:order-1 duration-300 hover:scale-95 relative col-span-4 flex items-center justify-center'>
                        <div className='grid'>
                            <div className='relative h-40 w-52'>
                                <Image className='rotate-12 w-10' src='/bali/one.jpg' fill alt='' />
                            </div>
                            <div className='relative h-40 w-52'>
                                <Image className='w-10 -rotate-12 bg-white p-1' src='/bali/two.jpg' fill alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-3  duration-300 hover:scale-95 col-span-4'>
                        <h1 className='text-xl md:text-3xl py-4 border-b text-blue-600 border-blue-600 font-bold'>Our Story</h1>
                        <h1 className='text-xl md:text-5xl py-4 font-bold'>How Did We Started?</h1>
                        <p className='text-lg md:text-xl font-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, ducimus dolorum eum quas hic non molestiae velit suscipit architecto, ea nam illo labore eveniet deserunt fugit est vel eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, ducimus dolorum eum quas hic non molestiae velit suscipit architecto, ea nam illo labore eveniet deserunt fugit est vel eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, ducimus dolorum eum quas hic non molestiae velit suscipit architecto, ea nam illo labore eveniet deserunt fugit est vel eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, ducimus dolorum eum quas hic non molestiae velit suscipit architecto, ea nam illo labore eveniet deserunt fugit est vel eos!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, ducimus dolorum eum quas hic non molestiae velit suscipit architecto, ea nam illo labore eveniet deserunt fugit est vel eos!

                        </p>
                    </div>
                </div>

                {/* Testimonials  */}
                <div className='grid grid-cols-4 py-6'>
                    <div className='col-span-4 duration-300 hover:scale-95'>
                        <h1 className='text-xl md:text-3xl py-4 border-b text-blue-600 border-blue-600 font-bold'>Public Opinions</h1>
                        <h1 className='text-xl md:text-5xl py-4 font-bold'>What People Think About Us?</h1>
                        <div>
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
                </div>

                {/* our team */}
                <div className='grid grid-cols-4 py-6'>

                    <div className='md:col-span-3 col-span-4'>
                        <h1 className='text-xl md:text-3xl py-4 border-b text-blue-600 border-blue-600 font-bold'>Our Team</h1>
                        <h1 className='text-xl md:text-5xl py-4 font-bold'>The Amazing Team</h1>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 py-10 items-center justify-center gap-x-4 gap-y-16 md:gap-4'>
                            <div className='flex items-center  duration-300 hover:scale-95 h-40 relative justify-center'>
                                <Image src='/avatar/person1.png' fill alt='' />
                                <h2 className='absolute text-md -bottom-12 w-full text-center grid font-semibold z-10'>
                                    John
                                    <span className='text-sm font-normal'>Co-founder, Wander Women</span>
                                </h2>
                            </div>
                            <div className='flex items-center  duration-300 hover:scale-95 h-40 relative justify-center'>
                                <Image src='/avatar/person3.png' fill alt='' />
                                <h2 className='absolute text-md -bottom-12 w-full text-center grid font-semibold z-10'>
                                    Jannat Mira
                                    <span className='text-sm font-normal'>Founder, Wander Women</span>
                                </h2>
                            </div>
                            <div className='grid items-end  duration-300 hover:scale-95 h-40 relative justify-center'>
                                <Image src='/avatar/person2.png' fill alt='' />
                                <h2 className='absolute text-md -bottom-12 w-full text-center grid font-semibold z-10'>
                                    Sara Islam
                                    <span className='text-sm font-normal'>CEO, Wander Women</span>
                                </h2>
                            </div>
                            <div className='flex items-center  duration-300 hover:scale-95 h-40 relative justify-center'>
                                <Image src='/avatar/person3.png' fill alt='' />
                                <h2 className='absolute text-md -bottom-12 w-full text-center grid font-semibold z-10'>
                                    Jenny
                                    <span className='text-sm font-normal'>Director, Wander Women</span>
                                </h2>
                            </div>
                            <div className='flex items-center  duration-300 hover:scale-95 h-40 relative justify-center'>
                                <Image src='/avatar/person2.png' fill alt='' />
                                <h2 className='absolute text-md -bottom-12 w-full text-center grid font-semibold z-10'>
                                    Trisha
                                    <span className='text-sm font-normal'>Customer Support, WW</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-1 hidden relative col-span-4 md:flex items-center justify-center'>
                        <div className='grid  duration-300 hover:scale-95'>
                            <div className='relative h-40 w-52'>
                                <Image className='rotate-12 w-10' src='/turkiye/five.jpg' fill alt='' />
                            </div>
                            <div className='relative h-40 w-52'>
                                <Image className='w-10 -rotate-12 bg-white p-1' src='/turkiye/three.jpg' fill alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}