import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../../api/axiosWithAuth.js";
import { Button, Form, Label, Input, Row, Col } from 'reactstrap';
import { CardBody, CardTitle, CardText, CardImg } from 'reactstrap'


//this displays the user's preferences
export default function UserPreferencesEdit(props) {
  const { user } = props
  
  if (!user) {
    return null
  }
  return (
    <div className='UserPreferencesDetails'  
    style={{
      padding: '2%',
      }}>
      <div className='details' 
      style={{
        color:"#EDF4E1",
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        padding: '2%',
       
        }}>

        <CardBody className='userPopulation' style={{backgroundColor:"#5BDB95", padding:"2%", borderRadius: "1rem",  marginBottom: '5%'}}>{"Minimum Population:    "}{user.minPopulation} </CardBody>
       
        <CardBody className='userPopulation' style={{backgroundColor:"#5BDB95", padding:"2%", borderRadius: "1rem",  marginBottom: '5%'}}>{"Maximum Population:    "}{user.maxPopulation}</CardBody>
     
        <CardBody className='userRent' style={{backgroundColor:"#5BDB95", padding:"2%", borderRadius: "1rem",  marginBottom: '5%'}}>{"Minimum Rent:    "}{user.minRent}</CardBody>
    
        <CardBody className='userRent' style={{backgroundColor:"#5BDB95", padding:"2%", borderRadius: "1rem",  marginBottom: '5%'}}>{"Maximum Rent:    "}{user.maxRent}</CardBody>
    
        <CardBody className='userHouseCost' style={{backgroundColor:"#5BDB95", padding:"2%", borderRadius: "1rem",  marginBottom: '5%'}}>{"Minimum House Cost:   "}{user.minHouseCost}</CardBody>
    
        <CardBody className='userHouseCost' style={{backgroundColor:"#5BDB95", padding:"2%", borderRadius: "1rem",  marginBottom: '5%'}}>{"Maximum House Cost:   "}{user.maxHouseCost}</CardBody>
   
        <CardBody className='userCostOfLiving' style={{backgroundColor:"#5BDB95", padding:"2%", borderRadius: "1rem",  marginBottom: '5%'}}>{"Cost of Living:    "}{user.costOfLiving}</CardBody>
      
      
      </div>

    </div>
  )
}
