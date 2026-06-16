import React, { useState } from 'react'
import { getCountryByGivenPop } from '../api/api'

const GetCountryPopByUser = () => {
    const [popCount,setPopCount] = useState()
    const [countryWithPop ,setCountryWithPop]  = useState([])

    async function handleSubmit(){

       const res = await getCountryByGivenPop({popCount:popCount})
            setCountryWithPop(res)
    }

  return (
    <>
    
        <h1>GetCountryPopByUser</h1>

            <input type="number"  
                onChange={(e)=>setPopCount(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <div style={{overflowY:"auto",height:"500px"}}>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countryWithPop.map((r,i)=>(
                            <tr key={i}>
                                <td>{r.Name}</td>
                                <td>{r.Population}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </>

  )
}

export default GetCountryPopByUser