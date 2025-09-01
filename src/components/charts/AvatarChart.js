import React from 'react'
import { Cell, Pie, PieChart, Tooltip, ResponsiveContainer } from 'recharts';

function AvatarChart({totalUsers}) {

  const hasAvatar = totalUsers.filter((t) => t.avatar !== "").length
  const hasNotAvatar = totalUsers.filter((t) => t.avatar === "").length

  const usersAvatar = [
    {name: "Has Avatar", value: hasAvatar},
    {name: "Has No Avatar", value: hasNotAvatar}
  ]

  const COLORS = ['#0088FE', '#00C49F']
  

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie data={usersAvatar} nameKey="name" dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label={({name, value}) => {
          const total = hasAvatar + hasNotAvatar
          return `${name} ${((value / total)*100).toFixed(0)}%`
        }}>
          {usersAvatar.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]}/>
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default AvatarChart