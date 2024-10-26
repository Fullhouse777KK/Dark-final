import { ReactNode, FC, useState } from 'react'
import Navbar from '../components/Nav/NavBar'
interface IProps {
    children: ReactNode
  }
  
  const MainLayout:FC<IProps> = ({ children }) => {
    return (
     <>
      <div className='main'>
        <Navbar/>
        <div className="container">
          {children}
        </div>
      </div>
     </>
    )
  }
  
  export default MainLayout