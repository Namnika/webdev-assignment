import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ avatar }) {
  return (
    <div className='navbar d-flex justify-content-between align-items-center p-4 shadow-sm'>
      <div className='fs-4 fw-bold mx-2'>
        <Link to="/" className='text-decoration-none text-white'>Users Dashboard</Link>
      </div>

      <div className='d-flex align-items-center gap-4'>
        <Link to="/users" className='fs-6 text-white text-decoration-none'>All Users</Link>
      </div>

      <div className='user-avatar'>
        <span><img alt='user-avatar' className='user-avatar' src={avatar} /></span>
      </div>
    </div>
  )
}

export default Navbar