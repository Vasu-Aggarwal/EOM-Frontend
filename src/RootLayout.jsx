import React from 'react'
import Login from './components/Login'
import { Outlet } from '@tanstack/react-router'

const RootLayout = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default RootLayout