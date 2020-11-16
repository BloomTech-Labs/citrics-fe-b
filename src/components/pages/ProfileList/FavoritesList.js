import React,{ useEffect} from 'react';
import { connect } from 'react-redux';
import Post from '../View Post/Post';
import { fetch } from '../../store/actions/getAction.js';
debugger;
const FavoritesList = props =>{
    useEffect(()=>{
        props.fetch();
       
    },[])
    
    console.log(props)

     return (
        <div className='FavoritesList'>
            {props.favoriteCities.map((data)=>{
             return (<Post details = {data}/>)
             
            })}
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state);
    return {
      favoriteCities: state.getReducer.favoriteCities
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetch }
  )(FavoritesList);