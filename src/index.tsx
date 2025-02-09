import React from 'react';
import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const root = document.getElementById('root');

if(!root) {
    throw new Error('No root element found');
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <h1>about</h1>
            },
            {
                path: '/shop',
                element: <h1>shop</h1>
            }
        ]
    }
])

container.render(
    <RouterProvider router={router} />
)