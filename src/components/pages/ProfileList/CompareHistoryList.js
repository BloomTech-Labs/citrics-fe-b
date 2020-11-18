const UserPreferencesList = props =>{
    useEffect(()=>{
        props.getUserData();
       
    },[])
    
    console.log(props)

     return (
        <div className='CompareHistoryList'>
            {/*map over list of cities*/}
             <CompareHistoryDetails user={props.user}/>
             
           
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state);
    return {
      user: state.user
    };
  };
  
  export default connect(
    mapStateToProps,
    { getUserData }
  )(UserPreferencesList);