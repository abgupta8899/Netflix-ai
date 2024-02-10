import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'



function Body() {



    const AppRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browser',
            element: <Browse />
        },
    ]);




    return (
        <div>
            <RouterProvider router={AppRouter} />

        </div>
    )
}

export default Body
