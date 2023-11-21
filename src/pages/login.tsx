"use client"

import React from 'react'
import axios from 'axios';
import Link from 'next/link';
import { Footer, Header } from '@women/components';
import Router from 'next/router';
import Head from 'next/head';

type Props = {}

const API_BASE_URL = 'https://reqres.in/api';

const LoginPage = (props: Props) => {
  const [loginData, setLoginData] = React.useState({ email: 'eve.holt@reqres.in', password: 'cityslicka' });
  const [token, setToken] = React.useState('');
  const [isLoggedin, setIsLoggedin] = React.useState<boolean>(true)

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, loginData);
      const data = response.data;

      if (data.token) {
        setToken(data.token);
        localStorage.setItem('token', data.token)
        alert('Login successful! Token: ' + data.token);
        Router.push('/')

      } else {

        alert('Login failed. Please check your credentials.');
      }
    } catch (error: any) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Wander Women | Login</title>
      </Head>
      <Header setIsLoggedin={(x: boolean) => setIsLoggedin(x)} />
      <div className="grid h-full w-full border-y-2 border-pink-200 p-10">
        <div className="gap-4 max-w-3xl mx-auto ring-2 ring-pink-200 bg-gradient-to-tr shadow-lg rounded-md from-green-50 via-pink-50 to-purple-50 py-14 px-5 w-full grid ">
          <div className="py-4 grid gap-4">
            <h1 className="text-4xl text-center font-bold">Login Here</h1>
            <p className="text-center text-xl">Create an account to take quiz, take part in challenge, and more.</p>
          </div>
          <div className="grid w-full gap-1">
            <label className="text-lg font-semibold px-2 text-pink-700" htmlFor="email">Email Addess *</label>
            <input name='email'
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              className="w-full h-14 text-gray-700 px-4 text-2xl rounded-md ring-0 outline-none bg-[#E6E6E6]" />
          </div>
          <div className="grid w-full gap-1">
            <label className="text-lg font-semibold px-2 text-pink-700" htmlFor="password">Password *</label>
            <input name='password'
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
              className="w-full h-14 text-gray-700 px-4 text-2xl rounded-md ring-0 outline-none bg-[#E6E6E6]" />
          </div>
          <div className="grid w-full gap-1">
            <label className="text-lg font-semibold px-2 text-pink-700" htmlFor="phone">Phone Number</label>
            <input name='phone' className="w-full h-14 text-gray-700 px-4 text-2xl rounded-md ring-0 outline-none bg-[#E6E6E6]" />
          </div>
          <div className="flex items-center justify-end px-2">
            <Link className="font-semibold text-[#888888] hover:text-pink-500" href='#'>Forgot Password?</Link>
          </div>

          <button className=" h-14 flex gap-2 items-center text-lg text-center justify-center font-semibold text-gray-50 px-10 bg-pink-500 duration-500 hover:bg-pink-700 rounded-md" onClick={handleLogin}>
            login
          </button>

          <div className="flex items-center justify-center px-2">
            <Link className="font-semibold hover:text-pink-500 duration-500 text-pink-700" href='/signup'>Don&rsquo;t have an account?</Link>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default LoginPage