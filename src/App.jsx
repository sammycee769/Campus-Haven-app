import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GetStarted from './Getstarted.jsx'
import Landing from './Campushaven.jsx'
import Login from './Login.jsx'
import Test from './test.jsx'
import Signupoption from './Signupoption.jsx'


export default function App() {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/getstarted' element={<GetStarted/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/signup_option' element={<Signupoption/>}/>
    </Routes>
  )
}
