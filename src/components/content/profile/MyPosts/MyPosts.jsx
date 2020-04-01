import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post countLikes={p.countLikes} message={p.message} http={p.http} />);
  let newPostElement = React.createRef();
  let addPost = () => { 
    let text = newPostElement.current.value;
    props.addPost(text)
   };
   let removeText = () => {
     newPostElement.current.value = '';
   };
  return (

    <div className={styles.active}>
      <h3 className={styles.my_post}>My Post</h3>
      <div className={styles.textarea}>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div className={styles.buttons}>
        <button onClick={addPost}>Add post</button>
        <button onClick={removeText}>Remove</button>
      </div>
      {postsElements}
    </div>
  );
}
export default MyPosts;