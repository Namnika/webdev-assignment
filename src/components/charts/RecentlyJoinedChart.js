import React from 'react'

function RecentlyJoinedChart({ totalUsers }) {

  const recentlyJoined = totalUsers.sort((b, a) => b - a).slice(0, 5)

  return (
    <div className='mx-3 my-3'>
      <div className='fs-6 text-secondary text-start  fw-semibold'><p>Here are Top 5 newest users joined</p></div>
      <table className='table table-striped table-secondary'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>NAME</th>
            <th scope='col'>GENDER</th>
            <th scope='col'>LOCATION</th>
            <th scope='col'>AGE</th>
          </tr>
        </thead>

        <tbody>
          {recentlyJoined.map((u) => (
            <tr className='shadow-sm'>
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
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default RecentlyJoinedChart