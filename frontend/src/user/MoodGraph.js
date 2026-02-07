import {Line} from 'react-chartjs-2'
import React from 'react'
import{
  Chart as chartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js'

chartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const MoodGraph = ({moods=[]}) => {
  const labels=moods.map((p)=>(
    new Date(p.date).toLocaleDateString("en-IN",{
      day:"numeric",
      month:"short"
    })
  ))

  console.log(moods)

  const moodData=moods.map((p)=>p.moodvalue)

  const data={
    labels,
    datasets:[
      {
        label:"Mood Trend",
        data:moodData,
        borderColor:"#6a85f1",
        backgroundColor:"rgba(106,133,241,0.2)",
        tension:0.4,
        pointRadius:6,
      }
    ]
  }

  const options={
    responsive:true,
    plugins:{
      legend:{
        display:true
      },
    },
    scales:{
      y:{
        min:0,
        max:5,
        ticks:{
          stepSize:1,
        }
      }
    }
  }

  return (
    <div className='graph-card'>
      <h4>Mood Analytics</h4>
      <Line data={data} options={options}></Line>
    </div>
  )
}

export default MoodGraph
