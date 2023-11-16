import React from 'react'
import Image from 'next/image';
// import styles from '@women/styles/Home.module.css';

type Props = {
    title: string;
    subtitle: string;
    images: string[];
}

const imageDelay = 4000; // 4 seconds

export const Slides = (props: Props) => {

    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

    // const currentImageIndex = useDebounce(currentImageIndexs, 200);

    React.useEffect(() => {

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
        }, imageDelay);

        return () => clearInterval(interval);
    }, [props]);

    return (
        <div className='h-full mx-auto max-w-8xl w-full bg-opacity-40 md:opacity-100 bg-black'>
            <div className='relative h-[300px] md:h-[80vh] rounded-md'>
                {props.images.map((image: any, index: number) => (
                    <Image
                        fill
                        key={index}
                        src={`/slides/${image}`}
                        alt={`Image ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover content-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
                <div className='absolute grid gap-6 bg-black bg-opacity-70 h-full w-full items-center justify-center'>
                    <div className='w-full px-4 md:px-0 max-w-5xl mx-auto'>
                        <h1 className='text-2xl md:text-6xl py-6 text-white font-semibold'>{props.title}</h1>
                        <p className='text-lg md:text-2xl text-white'>{props.subtitle}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};