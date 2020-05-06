import React from 'react';
import { createAddPostAction} from '../../../../redux/profiles-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    profilesPage: state.profilesPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (newPostText) => { dispatch(createAddPostAction(newPostText)) }
  }
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;