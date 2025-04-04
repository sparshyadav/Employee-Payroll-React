import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './src/Component/Login'
import Registration from './src/Component/Registration'
import Dashboard from './src/Component/Dashboard'
import GitHubCallback from './src/Component/Callback'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: '/registration',
        element: <Registration />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }, 
    {
      path:'/callback',
      element:<GitHubCallback />
    }
])

export default class RouterModule extends Component {
  render() {
    return (
      <div>
        <RouterProvider router = {router} />
      </div>
    )
  }
}