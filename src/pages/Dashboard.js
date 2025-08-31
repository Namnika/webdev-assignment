import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AvatarChart from '../components/charts/AvatarChart'
import UsersPerDayChart from '../components/charts/UsersPerDayChart'
import UserCard from '../components/UserCard'
import SignupChart from '../components/charts/SignupChart'

function Dashboard() {
  return (
    <div className='d-flex border flex-column mb-3'>
        <Sidebar />
        <div class="flex-grow-1 border p-4">
         <Navbar />
        </div>
        <div className='container border text-center gap-3'>
            <div className='row'>
                <div className='col border'>
                    <UserCard title="Total Users" value="1,452"/>
                </div>
                <div className='col border'>
                    <UserCard title="Active Users" value="870"/>
                </div>
                <div className='col border'>
                    <UserCard title="New Signups" value="120"/>
                </div>
            </div>
        </div>
        <div className='container border text-center gap-3'>
             <div className='row'>
                <div className='col'>
                    <AvatarChart />
                    <SignupChart />
                    <UsersPerDayChart />
                </div>
             </div>
        </div>
    </div>
  )
}

export default Dashboard