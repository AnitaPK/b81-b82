import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Register from './pages/Register'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './pages/Layout'
import CreateUpdateTask from './components/tasks/CreateUpdateTask'
import AllTasks from './components/tasks/AllTasks'
import MyTasks from './components/tasks/MyTasks'
import Dashboard from './pages/Dashboard'
import DetailTask from './components/tasks/DetailTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute >
          <Layout />

        </ProtectedRoute>} >
          <Route path="dashborad" element={<Dashboard />}></Route>

          <Route path="create-task" element={<CreateUpdateTask />} />
          <Route path="edit-task/:ID" element={<CreateUpdateTask />} />

          <Route path="all-tasks" element={<AllTasks />}></Route>
          <Route path="my-tasks" element={<MyTasks />}></Route>
          <Route path="get-task-details/:ID" element={<DetailTask />}></Route>


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
