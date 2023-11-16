import { Destinations } from '@women/components'
import { destinationsData } from '@women/data'
import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';

type Props = {}

const DestinationsPage = (props: Props) => {

    const router = useRouter();
    let id = router.query.slug;

    return (
        <>
            <Head>
                <title>Wander Women | Destination</title>
            </Head>
            {destinationsData?.map((x: any, index: number) => {
                return id === x?.id ? (
                    <Destinations data={x} key={index} />
                ) : null
            })}
        </>
    )
}

export default DestinationsPage