import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserData } from '../../../state/actions/index.js'
import FavoriteDetails from './FavoriteDetails'

const FavoritesList = props => {
  useEffect(() => {
    props.getUserData()
  }, [])

  console.log(props)

  return (
    <div className="FavoritesList">
      <FavoriteDetails user={props.user} />
    </div>
  )
}
const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { getUserData })(FavoritesList)
