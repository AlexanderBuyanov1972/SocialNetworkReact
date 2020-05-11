import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../../../utils/validators/validators';
import { Textarea } from '../../../formsControls/FormsControls';

const max = 15;
const min = 2;

const maxLength = maxLengthCreator(max);
const minLength = minLengthCreator(min);

const MyPosts = (props) => {
  let postsElements = props.profilesPage.posts.map(p => <Post key={p.id} countLikes={p.countLikes} message={p.message} http={p.http} />);

  const addMyPost = (formData) => {
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
        <Field component={Textarea} name='newPostText' validate={[required, maxLength, minLength]} />
      </div>
      <div className={styles.buttons}>
        <button>Add post</button>
      </div>
    </form>
  );
}

const MyPostsFormRedux = reduxForm({ form: 'myPostsForm' })(MyPostsForm);


export default MyPosts;