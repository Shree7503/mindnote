import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from "sonner";

const FuncLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Toaster richColors />
    </>
  )
}

export default FuncLayout