import React, { useState } from 'react'
import Pagination from '../components/Pagination'
import UsersTable from '../components/UsersTable'


function Users({ totalUsers }) {

	const [currentPage, setCurrentPage] = useState(1)
	const usersPerPage = 10

	const totalPages = Math.ceil(totalUsers.length / usersPerPage)
	const start = (currentPage - 1) * usersPerPage
	const end = start + usersPerPage

	const userList = totalUsers.slice(start, end)


	return (
		<div className='m-auto w-100 align-items-center d-flex flex-column justify-content-center'>
			{/* Search filter */}
			{/* table user */}
			<div className='mx-3 my-3'>
				<div className='fs-6 text-secondary text-start  fw-semibold'>
					<p>List of Users</p>
				</div>
				<div className='users-table'>
					<UsersTable userList={userList} />
				</div>
			</div>

			<Pagination onPageChange={setCurrentPage} totalPages={totalPages} currentPage={currentPage} />
		</div>
	)
}

export default Users