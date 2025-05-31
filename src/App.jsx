import React from 'react'
import {Route, Routes } from 'react-router-dom'
import GetStarted from './Getstarted.jsx'
import Landing from './Campushaven.jsx'
import Login from './Login.jsx'
import Test from './test.jsx'
import Signupoption from './Signupoption.jsx'
import Register from './Createaccount.jsx'
import Create from './Createaccount_phone.jsx'
import Verifyphone from './Verifyemail.jsx'
import Verifyemail from './Verifyemails.jsx'
import Landlordsignup from './Landlordsignup.jsx'
import Forgotpasword from "./Forgotpasword.jsx"


export default function App() {
  return ( 
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/getstarted' element={<GetStarted/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/signup_option' element={<Signupoption/>}/>
        <Route path='/create_account' element={<Register/>}/>
        <Route path='/create_phoneaccount' element={<Create/>}/>
        <Route path='/verify_email' element={<Verifyphone/>}/>
        <Route path='/verifyemail' element={<Verifyemail/>}/>
        <Route path='/landlordsignup' element={<Landlordsignup/>}/>
        <Route path="/forgotpassword" element={<Forgotpasword/>}/>
    </Routes>
  )
}
