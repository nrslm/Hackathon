import './App.css'
import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckIcon } from '@heroicons/react/20/solid'
import { fetchData } from './actions/actions';
import Spiner from './components/Spiner'
import Navbar from "./components/Navbar"
import SignIn from './components/SignIn';
import ErrorPage from './pages/ErrorPage';
import Login from './components/Login';
import DcoWorker from './components/dasbordco-worker/DcoWorker';
// Import Desctope design with login and register input
import RSK2 from './assets/img/push.png'
import RSK from './assets/img/RSK.png'
import RSK3 from './assets/img/Untitled.png'
import RSK4 from './assets/img/RSKlogo.png'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'data:image/png;base64,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',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
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
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
]
const peoples = [
  {
    name: 'Болотов Мирбек Нарынбекович',
    role: 'Главный аудитор Управления внутреннего аудита',
    imageUrl:
      'https://www.rsk.kg/media/uploads/2023/09/05/13_ZvhhPL9.jfif',
  },
  {
    name: 'Турдалиев Акылбек Беримкулович',
    role: 'Первый заместитель Председателя Правления',
    imageUrl:
      'https://www.rsk.kg/media/uploads/2023/09/05/14_f6Ez1Jr.jfif',
  },
  {
    name: 'Шакенов Шамабек Макейевич',
    role: 'Менеджер Управления Комплаенс контроля',
    imageUrl:
      'https://www.rsk.kg/media/uploads/2023/09/05/12_pVRFId5.jfif',
  },
  {
    name: 'Жаманкулова Гульнара Усенкуловна',
    role: 'Ведущий специалист по обслуживанию клиентов',
    imageUrl:
      'https://www.rsk.kg/media/uploads/2023/09/05/1.jfif',
  },
  {
    name: 'Тыналиева Тамара Жанузаковна',
    role: 'Заместитель директора-юрист',
    imageUrl:
      'https://www.rsk.kg/media/uploads/2023/09/05/2.jfif',
  },
  {
    name: 'Женишбеков Ороз',
    role: 'BACK',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Акылбеков Нурислам',
    role: 'FRONT',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Элдос Алмаз уулу',
    role: 'FRONT',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
const includedFeatures = [
  'Индивидуальный подход',
  'Круглосуточное обслуживание',
  'Надежда и вера',
  'Мы сильно хотим спать',
]
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.items);
  const loading = useSelector((state) => state.test.loading);
  const error = useSelector((state) => state.test.error);
  console.log(data)
  useEffect(() => {
    dispatch(fetchData('https://back.lidercargo.net/api/v1/cities'));
  }, [dispatch]);

  return (
    // <div className="App">


    // </div>
    <div>
      {/* Desctope */}

      <Navbar />
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Расчетно-сберегательная компания
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Основана в 1996 году Постановлением Правления Национального банка Кыргызской Республики №24 от 22 июля 1996 года с уставным капиталом 1 (один) миллион сом.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://as2.ftcdn.net/v2/jpg/06/08/01/59/1000_F_608015964_i95zZvA0ZsNfTF5vFXZOeqGN8rEwJcVa.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfoAthnyvzrU32a01gsSR3zGNRv8cgtaWV5A&usqp=CAU"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={RSK4}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={RSK2}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={RSK}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={RSK3}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Филиалы
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      


      <div className='ml-40 mr-40'>
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

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Стоимость карточки</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Наша карточка имеет большой функцианал на терреторий Кыргызской Республики, и очень большой сервис для обслуживания и большое кол-во филиалов, чем мы гордимся!
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Golden Card</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                ОАО «РСК Банк» предлагает продукты Visa Gold Eсоnomy и Visa Gold PCL. Данные карты относятся к серии карт VISA Gold и обладают присущими данной категории привилегиями.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Что входит</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Годовое обслуживание</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">2000</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">SOM</span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Приобрести карту
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Счета-фактуры и квитанции доступны для удобного возмещения расходов компании.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Лучшие соотрудники месяца</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                  Здесь мы показываем наших лучших соотрудников которые смогли проявить себя на том или ином этапе своей карьеры 
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {peoples.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {loading && <Spiner />}
      {error && <ErrorPage err={error} />}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}

      <DcoWorker/>

    </div>


  );
}

export default App;
