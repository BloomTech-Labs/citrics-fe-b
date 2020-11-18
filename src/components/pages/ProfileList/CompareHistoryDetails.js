import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../../api/axiosWithAuth.js";
import { Button, Form, Label, Input, Row, Col } from 'reactstrap';



export default function CompareHistoryDetails(props) {
    const {user} = props
  
  if(!user){
    return null
  }
  return (
    <div className='CompareHistoryDetails'>
      <div className='details'>
          
      <p className='city'>{user.city}</p>
      
      
      </div>
      
    </div>
  )
}
