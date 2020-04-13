import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post countLikes={p.countLikes} message={p.message} http={p.http} />);
  let newPostElement = React.createRef();

  let removeText = () => {
    newPostElement.current.value = '';
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  let onAddPost = () => {
    props.addNewPost();
  };
  return (

    <div className={styles.active}>
      <h3 className={styles.my_post}>My Post</h3>
      <div className={styles.textarea}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div className={styles.buttons}>
        <button onClick={onAddPost}>Add post</button>
        <button onClick={removeText}>Remove</button>
      </div>
      {postsElements}
    </div>
  );
}
export default MyPosts;