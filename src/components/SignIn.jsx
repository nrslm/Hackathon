import { useState, } from 'react'

import logoB from '../assets/img/logoRSk.png'
import ModalAvatar from './modalAvatar/ModalAvatar';



function SignIn() {

    const [choiseAvatar,setChoiseAvater] = useState(false)

    const handleChoiseAvatar = () =>{
        setChoiseAvater(!choiseAvatar)
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={logoB}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Добро пожаловать в наше приложение
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">

                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 outline-none"
                                    placeholder='Email address'
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">

                            </label>
                            <div className="mt-1">
                                <input
                                    id="firstName"
                                    name="FirstName"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 outline-none"
                                    placeholder='First Name'
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="FullName" className="block text-sm font-medium leading-6 text-gray-900">

                            </label>
                            <div className="mt-1">
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 outline-none"
                                    placeholder='Last Name'
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">

                            </label>
                            <div className="mt-1">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 outline-none"
                                    placeholder='Phone'
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
                                </label>

                            </div>
                            <div className="mt-1 flex items-center gap-7">

                                <div>
                                    <label className="flex gap-4 cursor-pointer" >
                                        <p>Male</p>
                                        <input
                                            id="Male"
                                            name="Male"
                                            type="radio"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-0 ring-inset  placeholder:text-gray-400 focus:ring-0 focus:ring-inset  sm:text-sm sm:leading-6 p-2 outline-none"
                                            placeholder='Password'
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="flex gap-4 cursor-pointer">
                                        <p>Female</p>
                                        <input
                                            id="Male"
                                            name="Male"
                                            type="radio"
                                            autoComplete="current-password"
                                            required
                                            className=" w-full rounded-md border-0 py-1.5 text-gray-900  ring-0 ring-inset placeholder:text-gray-400 focus:ring-0 focus:ring-inset  sm:text-sm sm:leading-6 p-2 outline-0"
                                            placeholder='Password'
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                </label>

                            </div>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 outline-none"
                                    placeholder='Password'
                                />
                            </div>
                            <div className="text-sm mt-3">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                            <ModalAvatar /> 

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignIn