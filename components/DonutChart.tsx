'use client'

import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import React from 'react'

ChartJS.register(ArcElement, Tooltip, Legend)

const DonutChart = ({ data }) => {
  return <Doughnut data={data} />
}

export default Doughnut
