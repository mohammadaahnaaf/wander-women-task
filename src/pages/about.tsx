import { About } from '@women/components'
import Head from 'next/head'
import React from 'react'

type Props = {}

const AboutPage = (props: Props) => {
    return (
        <>
            <Head>
                <title>Wander Women | About</title>
            </Head>
            <About />
        </>
    )
}

export default AboutPage