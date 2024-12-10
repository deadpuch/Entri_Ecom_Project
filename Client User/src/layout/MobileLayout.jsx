import React from 'react'
import { FooterNav } from '../components/user-components/Mobile Components/FooterNav'
import { Outlet } from 'react-router-dom'

export const MobileLayout = () => {
  return (
   <>
   <Outlet/>
   <FooterNav/>
   </>
  )
}
