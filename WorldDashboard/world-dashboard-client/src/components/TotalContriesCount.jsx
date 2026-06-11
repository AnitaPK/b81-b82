import React, { useEffect, useState } from 'react'
import { getTotalCountries } from '../api/api'

const TotalContriesCount = () => {
    const [tc, setTotalCountry] = useState()


    async function fetchData(){
        const res =await getTotalCountries()
        setTotalCountry(res)
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
        totalContriesCount
{tc}

    </div>
  )
}

export default TotalContriesCount