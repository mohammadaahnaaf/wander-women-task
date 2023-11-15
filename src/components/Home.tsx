import React from 'react'
import { Header, useProfile } from '@women/components'

type Props = {}

export const Home = (props: Props) => {

    const { profiles, saveProfile, clearProfiles } = useProfile();
    const [me, setMe] = React.useState<any>(
        {
            id: 1,
            data: 'data3',
        })

    function handleSave() {

        saveProfile(me);
        console.log(profiles)
    }

    return (
        <div className='min-h-screen w-full'>
            <Header />
            <div className='h-full w-full items-center flex bg-gradient-to-tr from-green-100 via-red-100 to-blue-100'>
                <div className='w-full max-w-4xl mx-auto flex gap-4 p-5 bg-white shadow-lg'>
                    <button onClick={() => handleSave()}>Submit</button>
                    <button onClick={() => clearProfiles()}>clear</button>
                </div>
            </div>
        </div>
    )
}