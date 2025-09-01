import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

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
      </PieChart>
    </ResponsiveContainer>
  )
}

export default AvatarChart