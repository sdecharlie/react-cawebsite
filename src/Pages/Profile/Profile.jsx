import React, { useEffect, useState } from 'react'
import "./Profile.css"
import Cover from "../Images/cover.png"
import Profiles from "../Images/profile.png"
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const[Username,SetUsername]=useState('');
    const[Mobile,SetMobile]=useState('');
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("res"));
        SetUsername((data.emailId));
        SetMobile((data.mobile));
    },[]);
    const navigate=useNavigate();
    const editProfile=()=>{
        navigate("/edit-profile")
    }
  return (
    <div className="container">
        <div className="profile-card">
            <img src={Cover} alt="" className='cover-pic' />
            <img src={Profiles} alt="" className='profile-pic' />
            <h1>{Username}</h1>
            <p>{Mobile}</p>
            <button onClick={editProfile} className='edit-profile'>Edit Profile</button><br />
            <a href='dashboard' className='edit-profile'>Go To DashBoard</a>
        </div>
    </div>
  )
}

export default Profile