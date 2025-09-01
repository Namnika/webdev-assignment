import React from 'react'
import AvatarChart from '../components/charts/AvatarChart'
import UsersPerDayChart from '../components/charts/UsersPerDayChart'
import UserCard from '../components/UserCard'
import SignupChart from '../components/charts/SignupChart'
import ChartCard from '../components/ChartCard'
import RecentlyJoinedChart from '../components/charts/RecentlyJoinedChart'

function Dashboard({ totalUsers }) {
    return (
        <div className='d-flex flex-column '>
            <div className=' text-center d-flex flex-col align-items-center justify-content-center  mt-3 m-2'>
                <UserCard title="Total Users" value={totalUsers.length} />
            </div>
            <div className='container text-center gap-3'>
                <div className='row'>
                    <div className='col'>
                        <ChartCard title="Users created per day (Last 30 days)">
                            <UsersPerDayChart totalUsers={totalUsers} />
                        </ChartCard>
                    </div>
                    <div className='col'>
                        <ChartCard title="Avatar Distribution">
                            <AvatarChart totalUsers={totalUsers} />
                        </ChartCard>
                    </div>
                    <ChartCard title="Most Active Signup today">
                        <SignupChart totalUsers={totalUsers} />
                    </ChartCard>
                    <ChartCard title="Recently Joined Users">
                        <RecentlyJoinedChart totalUsers={totalUsers} />
                    </ChartCard>
                </div>
            </div>
        </div>
    )
}

export default Dashboard