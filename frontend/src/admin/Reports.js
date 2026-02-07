import React from 'react'
import ActivityChart from './ActivityChart'
import MoodChart from './MoodChart'
import SleepChart from './SleepChart'

const Reports = () => {
  return (
    <div className='totaldiv'>
        <h1>Reports</h1>
      <p>Mental Health</p>
  
  <div className='chart'>
   <MoodChart/>
  </div>
   <div className='chart'>
        <ActivityChart/>
   </div>
  <div className='chart'>
     <SleepChart/>
  </div>
     
    </div>
  )
}

export default Reports
