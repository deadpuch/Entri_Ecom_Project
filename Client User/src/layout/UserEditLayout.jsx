import React from 'react'
import { Outlet } from 'react-router-dom'
import { ProfileMenu } from '../components/user-components/ProfileMenu'


export const UserEditLayout = () => {
  return (
    <>
    <ProfileMenu/>
    <Outlet/>
    </>
  )
}
