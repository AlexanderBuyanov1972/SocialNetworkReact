import React from 'react'
import { actionsProfile } from '../../../../redux/profiles-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { AppStateType } from '../../../../redux/redux-store'

let mapStateToProps = (state: AppStateType) => ({ profilesPage: state.profilesPage })

export default connect(mapStateToProps, { addNewPost: actionsProfile.createAddPostAction })(MyPosts);