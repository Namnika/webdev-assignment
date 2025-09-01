import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

function SignupChart({ totalUsers }) {

  const today = new Date()
  const LastDay = new Date()
  LastDay.setDate(today.getDate() - 1)

  const count = {}

  totalUsers.forEach(({ createdAt }) => {
    const hour = new Date(createdAt).getHours()
    count[hour] = (count[hour] || 0) + 1
  })

  const hasMostActive = Object.entries(count).map(([name, value]) => ({ name: `${name}:00`, value: value })).sort((a, b) => a - b)

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={hasMostActive}
          cx="50%"
          cy="50%"
          label={({ value }) => {
            return value > 1 ? `${value} users` : `${value} user`
          }}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >{hasMostActive.map((entry, index) => (
          <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
        ))}</Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default SignupChart