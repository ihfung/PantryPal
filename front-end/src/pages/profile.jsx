import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/navbar.scss';
import '../style/home.scss';
import '../style/profile.scss';
import Profile_form from '../component/profile_form';
import Footer from "../component/footer";

export default function Profile({userId}) {
  
  useEffect(() => {
    
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
     
      console.log('Stored userId:', storedUserId);
    }
  }, []);

  return (
    
    <div className="content">  
      <div className="main-add">
      {userId && <Profile_form userId={userId} />}
      </div>
      <Footer />
    </div>
  );
}
