import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../../api/axiosWithAuth.js";
import { Button, Form, Label, Input, Row, Col } from 'reactstrap';



export default function UserPreferencesEdit(props) {
    const {user} = props
  //const [user, setUser] = useState();
  //const [edit, setEdit] = useState(false);
  //const { id } = useParams();

  //const handleSubmit = (e) => {
  //  e.preventDefault();
  //  axiosWithAuth()
  //    .patch(`/users//user/1`, user)
  //    .then((res) => {
  //      console.log(res);
        //history.push("/users/users");
  //    })
  //    .catch((err) => console.log(err));
  //};
  
  //const handleChange = (e) => {
  //  setUser({
  //    ...user,
  //    [e.target.name]: e.target.value,
  //  });
  //};
  if(!user){
    return null
  }
  return (
    <div className='UserPreferenceEdit'>
      <div className='details'>
      <p className='userPopulation'>{user.minPopulation}</p>
      <p className='userPopulation'>{user.maxPopulation}</p>
      <p className='userCostOfLiving'>{user.costOfLiving}</p>
      <p className='userRent'>{user.minRent}</p>
      <p className='userRent'>{user.maxRent}</p>
      
      </div>
      <img top width="100%" src={user.photo_url} alt={user.title}/>

    </div>
  )
}
