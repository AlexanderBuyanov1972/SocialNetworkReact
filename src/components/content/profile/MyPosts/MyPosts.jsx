import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../../../utils/validators/validators';

const maxLength = maxLengthCreator(15);
const minLength = minLengthCreator(2);

const MyPosts = (props) => {
  let postsElements = props.profilesPage.posts.map(p => <Post countLikes={p.countLikes} message={p.message} http={p.http} />);

  const addMyPost = (formData) => {
    debugger;
    props.addNewPost(formData.newPostText);
  };
  

  return (

    <div className={styles.active}>
      <h3 className={styles.my_post}>My Post</h3>
      <MyPostsFormRedux onSubmit={addMyPost} />
      {postsElements}
    </div>
  );
}
const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.textarea}>
        <Field component='textarea' name='newPostText' validate={[required, maxLength, minLength]} />
      </div>
      <div className={styles.buttons}>
        <button>Add post</button>
      </div>
    </form>
  );
}

const MyPostsFormRedux = reduxForm({ form: 'myPostsForm' })(MyPostsForm);


export default MyPosts;