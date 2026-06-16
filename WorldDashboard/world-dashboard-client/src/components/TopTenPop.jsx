import React, { useEffect, useState } from 'react'
import { getTopTenCounPop } from '../api/api'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const TopTenPop = () => {

  const [topTen,setTopTen] = useState([])

  async function fetdata(){
    const res = await getTopTenCounPop()
    setTopTen(res)
  }

  useEffect(()=>{
    fetdata()
  },[])

console.log(topTen)


  return (
    <>
        <div>Top Ten Populated countries</div>
  <div style={{ width: "550px", height: "200px" }}>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={topTen}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="population" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </>

  )
}

export default TopTenPop