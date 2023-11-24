import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/img/logoRSk 1.png'
import Calendar from './Calendar'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        adress: "Араван",
        price: '$90.00',
        open: true,
        quantity: 1,
        imageSrc: 'https://banks.kg/storage/4864/conversions/rsk24-large.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        adress: "Баткен",
        open: false,
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://economist.kg/content/images/wp-content/uploads/2020/10/12.png',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        adress: "Араван",
        price: '$90.00',
        open: true,
        quantity: 1,
        imageSrc: 'https://banks.kg/storage/4864/conversions/rsk24-large.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
]
const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
]
export default function Navbar() {
    const [openBox, setOpenBox] = useState(true)
    
    const navigation = [
        { name: 'Онлайн очередь', href: '#', current: true, click: null },
        { name: 'Dashboard', href: '#', current: false, click: null },
        { name: 'Projects', href: '#', current: false, click: null },
        { name: 'Calendar', href: '#', current: false, click: null },
    ]
    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-10 w-auto"
                                            src={Logo}
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">

                                        <div className="flex space-x-4 pointer">
                                            {navigation.map((item, i) => (
                                                <div
                                                    onClick={() => 0 == i ? setOpenBox(true) : null}

                                                    key={item.name}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                >
                                                    {item.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>


                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )
                }
            </Disclosure >

            <Transition.Root show={openBox} as={Fragment} >
                <Dialog as="div" className="relative z-10 " onClose={setOpenBox}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden ">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium text-gray-900">Онлайн очередь</Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() => setOpenBox(false)}
                                                        >
                                                            <span className="absolute -inset-0.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8 overflow-auto hover:overflow-scroll h-98">
                                                    <div className="flow-root">
                                                        <h1 className=''>филиалы:</h1>
                                                        <ul role="list" className="-my-6 divide-y overflow-auto hover:overflow-scroll pt-6 divide-gray-200 h-56">
                                                            {products.map((product) => (
                                                                <li key={product.id} className="flex p-2 pt-2  justify-between items-center hover:bg-gray-100">
                                                                    <div className='flex'>
                                                                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img
                                                                                src={product.imageSrc}
                                                                                alt={product.imageAlt}
                                                                                className="h-full w-full object-cover object-center"
                                                                            />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href={product.href}>{product.adress}</a>
                                                                                    </h3>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                {
                                                                                    product.open ?
                                                                                        <div className='flex items-center'>
                                                                                            <p className="w-4 h-4 bg-green-600 rounded-full mr-2"></p>
                                                                                            <p className="">открыто</p>
                                                                                        </div>
                                                                                        :
                                                                                        <div className='flex items-center'>
                                                                                            <p className="w-4 h-4 bg-red-600 rounded-full mr-2"></p>
                                                                                            <p className="">закрыто</p>
                                                                                        </div>
                                                                                }

                                                                                {/* <div className="flex">
                                                                                    <button
                                                                                        type="button"
                                                                                        className="ml-4 font-medium text-indigo-600 hover:text-indigo-500"
                                                                                    >
                                                                                        Remove
                                                                                    </button>
                                                                                </div> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                                                        </svg>


                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='flex my-2 pt-2 justify-between border-t border-gray-200'>
                                                    {
                                                        [1, 2, 3, 4, 5, 6, 7].map((item) => {
                                                            return (
                                                                <div className='p-2 rounded-xl border hover:border-purple-800 bg-gray-50 flex flex-col items-center'>
                                                                    <p className='text-xs'>Пн</p>
                                                                    <p className='text-xs'>08:00</p>
                                                                    <p className='text-xs'>17:00</p>
                                                                </div>
                                                            )
                                                        })
                                                    }


                                                </div>

                                                <div className='border-t border-gray-200'>
                                                    <div>
                                                        Обслуживание физ лиц
                                                    </div>
                                                    <ul role="list" className="divide-y divide-gray-100">
                                                        {people.map((person) => (
                                                            <li key={person.email} className="flex justify-between gap-x-6 py-5">
                                                                <div className="flex min-w-0 gap-x-4">
                                                                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                                                    <div className="min-w-0 flex-auto">
                                                                        <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                                    <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                                                                    {person.lastSeen ? (
                                                                        <p className="mt-1 text-xs leading-5 text-gray-500">
                                                                            Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                                                        </p>
                                                                    ) : (
                                                                        <div className="mt-1 flex items-center gap-x-1.5">
                                                                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                                            </div>
                                                                            <p className="text-xs leading-5 text-gray-500">Online</p>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className=' my-4'>
                                                    <h1 className='my-2'>Дата очереди</h1>
                                                    <Calendar />
                                                </div>
                                            </div>



                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>$262.00</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                <div className="mt-6">
                                                    <a
                                                        href="#"
                                                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                    >
                                                        Конец
                                                    </a>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <p>
                                                        or
                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            onClick={() => setOpenBox(false)}
                                                        >
                                                            Continue Shopping
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}