import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../../../api/axiosWithAuth.js'
import { Button, Form, Label, Input, Row, Col } from 'reactstrap'

export default function UserPreferencesEdit(props) {
  const { user } = props
  //const [edit, setEdit] = useState(false);
  //const { id } = useParams();

  /*const handleSubmit = (e) => {
      e.preventDefault();
      axiosWithAuth()
        .patch(`/users//user/1`, user)
        .then((res) => {
          console.log(res);
            history.push("/users/users");
        })
        .catch((err) => console.log(err));
    };
  
    const handleChange = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }; */
  if (!user) {
    return null
  }
  return (
    <div className="UserPreferenceEdit">
      <div className="details">
        <p className="userPopulation">{user.minPopulation}</p>
        <p className="userPopulation">{user.maxPopulation}</p>
        <p className="userCostOfLiving">{user.costOfLiving}</p>
        <p className="userRent">{user.minRent}</p>
        <p className="userRent">{user.maxRent}</p>
      </div>
      {/*
      <img top width="100%" src={user.photo_url} alt={user.title}/>
      {!edit && <Button onClick={() => setEdit(true)}>Edit user</Button>}
      {edit && (
        
        /*<Form className='editForm' onSubmit={handleSubmit}>
    
          <div className='edit'>

            <Label>Population</Label>
          
            <Input
              name="population"
              value={user && user.minPopulation}
              onChange={handleChange}
            />
          </div>

          <div className='edit cost of living'>
            <Label>Cost of Living</Label>
            <Input
              name="description"
              value={user && user.maxPopulation}
              onChange={handleChange}
            />
          </div>

          <div className='edit rent'>
            <Label>Rent Min</Label>
            <Input
              name="description"
              value={user && user.minRent}
              onChange={handleChange}
            />
          </div>

          <div className='edit house cost'>
            <Label>Rent Max</Label>
            <Input
              name="description"
              value={user && user.maxRent}
              onChange={handleChange}
            />
          </div>

          <div className='editBttns'>
            <Button type="submit">Save </Button>
          </div>
        </Form> 

      )} */}
    </div>
  )
}
