import React from 'react';
import {ProfileBody, ProfileName, ProfileBio, ProfileImg } from 'reactstrap';
import { Link } from "react-router-dom";
function UserProfile(props) {
  const {details} = props
  return (
    <Link to={`/profile/${details.id}`}>
      <div className='card'>
                <ProfileImg top width="100%" src={details.photo_url} alt={details.title}/>
                <ProfileBody>
                    <ProfileName tag='h3'> {details.title}</ProfileName>
                    <ProfileBio> {details.description}</ProfileBio>
                </ProfileBody>
    </div>
    </Link>
  )
}
export default UserProfile;