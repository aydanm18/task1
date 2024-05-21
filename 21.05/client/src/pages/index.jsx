import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'

const MainRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default MainRoot