import React from 'react'

function UserCard({title, value}) {
  return (
    <div className='user-card'>
      <h3 className='user-card-title'>{title}: </h3>
      <span className='user-card-para'>{value}</span>
    </div>
  )
}

export default UserCard