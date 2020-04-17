import React from 'react';
import { createAddPostAction, createPostTextAction } from '../../../../redux/profiles-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
// import StoreContext from '../../../../StoreContext';

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState();

//           let onAddPost = () => {
//             store.dispatch(createAddPostAction());
//           };

//           let onPostChange = (text) => {
//             store.dispatch(createPostTextAction(text));
//           }
//           return (
//             <MyPosts updateNewPostText={onPostChange}
//               addNewPost={onAddPost}
//               profilesPage={state.profilesPage} />)
//         }
//       }

//     </StoreContext.Consumer>
//   );
// }

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