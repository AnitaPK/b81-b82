import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TotalPop from './components/TotalPop'
import TotalContriesCount from './components/totalContriesCount'
import TopTenPop from './components/TopTenPop'

function App() {

  return (
    <>
     <Header />
     <TotalPop />
     <TotalContriesCount />
     <TopTenPop />
    </>
  )
}

export default App
