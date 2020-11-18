import React, { useEffect } from 'react'
import UserPreferencesEdit from './UserPreferencesEdit'
import { getUserData } from '../../../state/actions/index.js'
import { connect } from 'react-redux'
const UserPreferencesList = props => {
  useEffect(() => {
    props.getUserData()
  }, [])

  console.log(props)

  return (
    <div className="UserPreferencesList">
      <UserPreferencesEdit user={props.user} />
    </div>
  )
}
const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { getUserData })(UserPreferencesList)
