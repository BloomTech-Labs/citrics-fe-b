import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../../api/axiosWithAuth.js'
import { Button, Form, Label, Input, Row, Col } from 'reactstrap'

export default function ProfileDetails(user) {
  //const [edit, setEdit] = useState(false);
  const { id } = useParams()
  //const history = useHistory();
}
