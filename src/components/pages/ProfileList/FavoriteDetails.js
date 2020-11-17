import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../axiosWithAuth.js";
import { Button, Form, Label, Input, Row, Col } from 'reactstrap';



export default function FavoriteDetails() {
  const [post, setPost] = useState();
  const [edit, setEdit] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/user/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(post);
  /*const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/posts/${id}`, post)
      .then((res) => {
        console.log(res);
        history.push("/we_are_in/posts");
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = () => {
    axiosWithAuth()
      .delete(`api/posts/${id}`)
      .then((res) => {
        history.push("/we_are_in/posts");
      });
  };
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };*/
  if(!post){
    return null
  }
  return (
    <div className='PhotoDetails'>
      <div className='details'>
      <h2>{post.title}</h2>
      <p className='postDescription'>{post.description}</p>
      <p className='postLocation'>{post.location}</p>
      {/*{!edit && <Button onClick={() => setEdit(true)}>Edit Post</Button>}
      {edit && (
        
        <Form className='editForm' onSubmit={handleSubmit}>
          <div className='edit'>
            <Label>Name</Label>
            <Input
              name="title"
              value={post && post.title}
              onChange={handleChange}
            />
          </div>

          <div className='edit'>

            <Label>Image Url</Label>
          
            <Input
              name="photo_url"
              value={post && post.photo_url}
              onChange={handleChange}
            />
          </div>

          <div className='edit textarea'>
            <Label>Description</Label>
            <Input
              name="description"
              value={post && post.description}
              onChange={handleChange}
            />
          </div>
          <div className='editBttns'>
            <Button type="submit">Save </Button>
            <Button onClick={handleDelete}>Delete</Button>
          </div>
        </Form>
      )} */}
      </div>
      <img top width="100%" src={post.photo_url} alt={post.title}/>

    </div>
  )
}
