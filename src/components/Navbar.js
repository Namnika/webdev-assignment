import React from 'react'

function Navbar({avatar}) {
  return (
    <div className='navbar d-flex justify-content-between align-items-center p-4 text-white shadow-sm'>
      <div className='fs-4 fw-bold mx-2'>Users Dashboard</div>

      <div className='d-flex align-items-center gap-4'>
        <select className='days-select' name="days-select" id="days-select">
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
        </select>
      </div>

      <div className='user-avatar'>
        <span><img alt='user-avatar' className='user-avatar' src={avatar}/></span>
      </div>
    </div>
  )
}

export default Navbar