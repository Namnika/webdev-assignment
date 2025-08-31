import React from 'react'

function ChartCard({title, children}) {
  return (
    <div className='chart-card mb-2'>
        <h2 className='chart-card-title'>{title}</h2>
        <p style={{height: "64px"}}>
            {children}
        </p>
    </div>
  )
}

export default ChartCard