import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function UsersPerDayChart({ totalUsers }) {
	const today = new Date()
	const thirtyDaysAgo = new Date()
	thirtyDaysAgo.setDate(today.getDate() - 30)

	const countObj = {}

	totalUsers.forEach(({ createdAt }) => {
		const date = new Date(createdAt)
		if (date >= thirtyDaysAgo && date <= today) {
			const key = date.toISOString().split("T")[0]
			countObj[key] = (countObj[key] || 0) + 1
		}
	}
	)

	const getUsersPerDay = Object.entries(countObj).map(([date, count]) => ({ date, count })).sort((a, b) => a - b)


	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart width={500} height={300} data={getUsersPerDay} margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5
			}}>
				<CartesianGrid strokeDasharray="3 3" />
				{/* datakey=created date */}
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="count" stroke='#8884d8' activeDot={{ r: 8 }} />
				<Line type="monotone" dataKey="date" stroke='#82ca9d' activeDot={{ r: 8 }} />
			</LineChart>
		</ResponsiveContainer>

	)
}

export default UsersPerDayChart