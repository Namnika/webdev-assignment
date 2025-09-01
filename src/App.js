import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Navbar from './components/Navbar';

function App() {

  const [totalUsers, setTotalUsers] = useState([])

  const handlegetTotalUsers = async () => {
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
    <Router>
    <div className="flex-grow-1 ">
                    <Navbar avatar={avatar} />
                </div>
      <Routes>
       
        <Route path='/' index element={<Dashboard totalUsers={totalUsers} />} />
        <Route path='/users' element={<Users totalUsers={totalUsers} />} />
      </Routes>
    </Router>
  );
}

export default App;
