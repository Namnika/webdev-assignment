import React, { useState } from 'react'
import UserModal from './UserModal'

function UsersTable({ userList }) {

    const [openModal, setOpenModal] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    const handleOpen = (user) => {
        setCurrentUser(user)
        setOpenModal(true)
    }
    const handleClose = () => {
        setCurrentUser(null)
        setOpenModal(false)
    }

    return (
        <>
            <table className='table table-striped w-100 p-1 table-secondary'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>NAME</th>
                        <th scope='col'>GENDER</th>
                        <th scope='col'>LOCATION</th>
                        <th scope='col'>AGE</th>
                        <th scope='col'>JOINED DATE</th>
                    </tr>
                </thead>

                <tbody>
                    {userList.map((u) => (
                        <tr className='shadow-sm' style={{cursor: "pointer"}} onClick={() => handleOpen(u)} key={u.id}>
                            <th scope='row'>{u.id}</th>
                            <td>
                                {u.name}
                            </td>
                            <td>
                                {u.gender}
                            </td>
                            <td>
                                {u.location}
                            </td>
                            <td>
                                {u.age}
                            </td>
                            <td>
                                {new Date(u.createdAt).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            {<UserModal openModal={openModal} selectUser={currentUser} handleClose={handleClose} />}
        </>
    )
}

export default UsersTable