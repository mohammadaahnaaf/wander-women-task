import { Destinations } from '@women/components'
import { destinationsData } from '@women/data'
import Head from 'next/head'
import React from 'react'

type Props = {}

const DestinationsListPage = (props: Props) => {

    return (
        <>
            <Head>
                <title>Wander Women | Destinations</title>
            </Head>
            <Destinations data={destinationsData[0]} />
        </>
    )
}

export default DestinationsListPage