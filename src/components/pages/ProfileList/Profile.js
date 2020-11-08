import React from 'react';
import {CardBody, CardTitle, CardText, CardImg} from 'reactstrap';
import { Link } from "react-router-dom";
function UserProfile(props) {
  const {item} = props
  return (
    <Link to={`/profile`}>
      <div className='card'>
                <CardImg src={item.avatarUrl} alt={item.name} top width="100%"/>
                <CardBody>
                    <CardTitle tag='h3'> {item.name} </CardTitle>
                    <CardText> Profile Bio</CardText>
                </CardBody>
    </div>
    </Link>
  )
}
export default UserProfile;