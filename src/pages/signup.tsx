"use client"

import React from 'react'
import axios from 'axios';
import Link from 'next/link';
import { Footer, Header } from '@women/components';
import Router from 'next/router';
import Head from 'next/head';

type Props = {}

const API_BASE_URL = 'https://reqres.in/api';

const SignupPage = (props: Props) => {
    const [loginData, setLoginData] = React.useState({ email: '', password: '' });
    const [signupData, setSignupData] = React.useState({ email: 'eve.holt@reqres.in', password: 'pistol' });
    const [token, setToken] = React.useState('');
    const [isLoggedin, setIsLoggedin] = React.useState<boolean>(true)

    const handleSignup = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, signupData);
            const data = response.data;
            if (data.token) {
                localStorage.setItem('token', data.token)
                setToken(data.token);
                alert('Signup successful! Token: ' + data.token);
                Router.push('/')
            } else {
                alert('Signup failed. Please check your information.');
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <>
            <Head>
                <title>Wander Women | Login</title>
            </Head>
            <Header setIsLoggedin={(x: boolean) => setIsLoggedin(x)} />
            <div className="grid h-full w-full border-y-2 border-green-200 p-10">
                <div className="gap-4 max-w-3xl bg-gradient-to-tr via-green-50 from-orange-50 to-yellow-50 rounded-md shadow-xl py-14 px-5 mx-auto w-full grid ">
                    <div className="py-4 grid gap-4">
                        <h1 className="text-4xl text-center font-bold">Sign Up Here</h1>
                        <p className="text-center text-xl">Create an account to take quiz, take part in challenge, and more.</p>
                    </div>
                    <div className="grid w-full gap-1">
                        <label className="text-lg font-semibold px-2 text-green-700" htmlFor="email">Email Addess *</label>
                        <input name='email'
                            value={signupData.email}
                            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                            className="w-full h-14 text-gray-700 px-4 text-2xl rounded-md ring-0 outline-none bg-[#E6E6E6]" />
                    </div>
                    <div className="grid w-full gap-1">
                        <label className="text-lg font-semibold px-2 text-green-700" htmlFor="password">Password *</label>
                        <input name='password'
                            value={signupData.password}
                            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                            required
                            className="w-full h-14 text-gray-700 px-4 text-2xl rounded-md ring-0 outline-none bg-[#E6E6E6]" />
                    </div>
                    
                    <div className="flex items-center justify-end px-2">
                        <Link className="font-semibold text-[#888888] hover:text-green-500" href='#'>Forgot Password?</Link>
                    </div>

                    <button className=" h-14 flex gap-2 items-center text-lg text-center justify-center font-semibold text-gray-50 px-10 bg-green-500 duration-500 hover:bg-green-700 rounded-md" onClick={handleSignup}>
                        Signup
                    </button>

                    <div className="flex items-center justify-center px-2">
                        <Link className="font-semibold hover:text-green-500 duration-500 text-green-700" href='/login'>Already have an account?</Link>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignupPage;