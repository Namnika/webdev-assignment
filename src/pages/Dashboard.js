import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import AvatarChart from '../components/charts/AvatarChart'
import UsersPerDayChart from '../components/charts/UsersPerDayChart'
import UserCard from '../components/UserCard'
import SignupChart from '../components/charts/SignupChart'
import ChartCard from '../components/ChartCard'
import RecentlyJoinedChart from '../components/charts/RecentlyJoinedChart'

function Dashboard() {

    const [totalUsers, setTotalUsers] = useState([])

    const handlegetTotalUsers = async() => {
        await fetch("https://6874ce63dd06792b9c954fc7.mockapi.io/api/v1/users")
        .then(res => res.json())
        .then(data => setTotalUsers(data))
        .catch(err => console.log("Unable to fetch Users data", err))
    }
    
    const avatar = totalUsers.map((a) => a.avatar)[0]
   
    useEffect(() => {
         handlegetTotalUsers()
    }, [])
    

    return (
        <div className='d-flex flex-column '>
            <div className="flex-grow-1 ">
                <Navbar avatar={avatar}/>
            </div>
            <div className=' text-center d-flex flex-col align-items-center justify-content-center  mt-3 m-2'>
                <UserCard title="Total Users" value={totalUsers.length} />
            </div>
            <div className='container text-center gap-3'>
                <div className='row'>
                    <div className='col'>
                        <ChartCard title="Users created per day (Last 30 days)">
                            <UsersPerDayChart totalUsers={totalUsers}/>
                        </ChartCard>
                    </div>
                    <div className='col'>
                        <ChartCard title="Avatar Distribution">
                            <AvatarChart totalUsers={totalUsers}/>
                        </ChartCard>
                    </div>
                        <ChartCard title="Most Active Signup today">
                            <SignupChart totalUsers={totalUsers}/>
                        </ChartCard>
                        <ChartCard title="Recently Joined Users">
                            <RecentlyJoinedChart totalUsers={totalUsers}/>
                        </ChartCard>

                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard