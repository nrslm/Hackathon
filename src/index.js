import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
