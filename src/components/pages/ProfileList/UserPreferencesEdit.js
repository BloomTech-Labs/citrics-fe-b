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
    <div className='UserPreferencesDetails'>
      <div className='details' style={{color:"#EDF4E1"}}>

        <p className='userPopulation'>{"Minimum Population: "}{user.minPopulation} </p>
        <p className='userPopulation'>{"Maximum Population: "}{user.maxPopulation}</p>
        <p className='userRent'>{"Minimum Rent: "}{user.minRent}</p>
        <p className='userRent'>{"Maximum Rent: "}{user.maxRent}</p>
        <p className='userHouseCost'>{"Minimum House Cost: "}{user.minHouseCost}</p>
        <p className='userHouseCost'>{"Maximum House Cost: "}{user.maxHouseCost}</p>
        <p className='userCostOfLiving'>{"Cost of Living: "}{user.costOfLiving}</p>
      
      
      </div>

    </div>
  )
}
