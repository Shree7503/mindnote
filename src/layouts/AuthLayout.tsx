import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from "sonner";

const AuthLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Toaster richColors />
    </>
  )
}

export default AuthLayout
