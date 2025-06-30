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
import Resetpasword from "./Passwordreset.jsx"
import Newpasword from "./Newpassword.jsx"
import VerifyIdentity from "./Verifyidentity.jsx"
// import Upload from "./Upload-nin.jsx"
import ConfirmUpload from './ConfirmUpload.jsx';
import UploadSuccess from './UploadSuccess.jsx';
import UploadID from './UploadID.jsx';
import LocationPrompt from './LocationPrompt.jsx';
import ManualLocation from './ManualLocation.jsx';
import PropertyShowcase from './Propertylisting.jsx'
import PropertyPost from './PostProperty.jsx'
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import ListingDetail  from './Listing.jsx'



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
        <Route path="/resetpassword" element={<Resetpasword/>}/>
        <Route path="/newpassword" element={<Newpasword/>}/>
        <Route path="/verifyidentity" element={<VerifyIdentity/>}/>
        {/* <Route path="/upload-nin" element={<Upload/>}/> */}
        <Route path="/upload-id" element={<UploadID />} />
        <Route path="/confirm-upload" element={<ConfirmUpload />} />
        <Route path="/upload-success" element={<UploadSuccess />} />
        <Route path="/location-prompt" element={<LocationPrompt />} />
        <Route path="/manual-location" element={<ManualLocation />} />
        <Route path="/showcase" element={<PropertyShowcase />} />
        <Route path="/postproperty" element={<PropertyPost />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listing/:id" element={<ListingDetail />} />

    </Routes>
  )
}
