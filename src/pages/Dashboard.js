import React from 'react'
import Navbar from '../components/Navbar'
import AvatarChart from '../components/charts/AvatarChart'
import UsersPerDayChart from '../components/charts/UsersPerDayChart'
import UserCard from '../components/UserCard'
import SignupChart from '../components/charts/SignupChart'
import ChartCard from '../components/ChartCard'
import RecentlyJoinedChart from '../components/charts/RecentlyJoinedChart'

function Dashboard() {
    return (
        <div className='d-flex flex-column mb-3'>
            <div class="flex-grow-1 ">
                <Navbar />
            </div>
            <div className=' text-center d-flex flex-col align-items-center justify-content-center  mt-3 m-2'>
                <UserCard title="Total Users" value="1,452" />
            </div>
            <div className='container text-center gap-3'>
                <div className='row'>
                    <div className='col'>
                        {/* chartCard wrap each chart */}
                        <ChartCard title="Users created per day (Last 30 days)">
                            <UsersPerDayChart />
                        </ChartCard>
                        <ChartCard title="Avatar Distribution">
                            <AvatarChart />
                        </ChartCard>
                        <ChartCard title="Most Active Signup today">
                            <SignupChart />
                        </ChartCard>
                        <ChartCard title="Recently Joined Users">
                            <RecentlyJoinedChart />
                        </ChartCard>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard