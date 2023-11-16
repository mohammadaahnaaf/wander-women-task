import React from 'react'
import { Header, Slides } from '.'

type Props = {}
const images = ['cover4.jpg', 'cover7.jpg', 'cover3.jpg', 'cover5.jpg'];

export const About = (props: Props) => {

    const [isLoggedin, setIsLoggedin] = React.useState<boolean>(true)

    return (
        <div>
            <Header setIsLoggedin={(x: boolean) => setIsLoggedin(x)} />
            <Slides
                images={images}
                title='ABOUT WANDER WOMEN'
                subtitle='Wander Women is a women-centric travel and networking platform where we empower women to travel.'
            />
        </div>
    )
}