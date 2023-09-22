
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'

export default function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/posts" element={<h1> Posts</h1> } />
        <Route path="/login" element={<h1>login</h1> } />
        <Route path="/register" element={<h1>register</h1>} />
      </Routes>
    </>
  )
  }