import React from 'react'
import { Header, Slides } from '.'

type Props = {}
const images = ['/slides/cover4.jpg', '/slides/cover7.jpg', '/slides/cover3.jpg', '/slides/cover5.jpg'];

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