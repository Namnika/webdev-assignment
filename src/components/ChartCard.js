import React from 'react'

function ChartCard({title, children}) {
  return (
    <div className='chart-card my-5'>
        <h2 className='chart-card-title'>{title}</h2>
        <div style={{height: "40vh", padding: "10px", cursor: "pointer"}}>
            {children}
        </div>
    </div>
  )
}

export default ChartCard