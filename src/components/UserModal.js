import React from 'react'

function UserModal({ handleClose, openModal, selectUser }) {
  if(!openModal) return null
  return (
    <div className='modal-overlay'>
      <div className='user-modal'>
        <h2 className='fw-bold mb-4 text-xl'>Users Details</h2>
        {/* {user details} */}
        {selectUser && (
          <div key={selectUser.id}>
            <div className='modal-header' style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", gap: "20px"}}>
              <span><img alt='user-avatar' className='user-avatar' src={selectUser.avatar} /></span>
              <p><strong>Name: </strong>{selectUser.name}</p>
            </div>
            <p><strong>Id: </strong>{selectUser.id}</p>
            <p><strong>Gender: </strong>{selectUser.gender}</p>
            <p><strong>Age: </strong>{selectUser.age}</p>
            <p><strong>Location: </strong>{selectUser.location}</p>
          </div>
        )}
        <button onClick={handleClose} className='modal-close'>X</button>
      </div>
    </div>
  )
}

export default UserModal