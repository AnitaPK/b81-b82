import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TotalPop from './components/TotalPop'
import TotalContriesCount from './components/totalContriesCount'
import TopTenPop from './components/TopTenPop'
import GetCountryPopByUser from './components/GetCountryPopByUser'

function App() {

  return (
    <>
    <div style={{marginLeft:"5rem"}}>
     <Header />
     <TotalPop />
     <TotalContriesCount />
     <TopTenPop />
     <hr />
     <GetCountryPopByUser />
     </div>
    </>
  )
}

export default App
