import React from 'react';
import { createAddPostAction, createPostTextAction } from '../../../../redux/profiles-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    profilesPage: state.profilesPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => { dispatch(createAddPostAction()) },
      updateNewPostText: (text) => { dispatch(createPostTextAction(text)) }
  }
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;