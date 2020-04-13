import React from 'react';
import { createAddPostAction, createPostTextAction } from '../../../../redux/profiles-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../../StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
       {
      (store) => {
        let state = store.getState();

        let onAddPost = () => {
          let action = createAddPostAction();
          store.dispatch(action);
        };

        let onPostChange = (text) => {
          let action = createPostTextAction(text);
          store.dispatch(action);
        }
        return (
        <MyPosts updateNewPostText={onPostChange}
          addNewPost={onAddPost}
          posts={state.profilesPage.posts}
          newPostText={state.profilesPage.newPostText} /> )
      }
    }

    </StoreContext.Consumer>
  );
}
export default MyPostsContainer;