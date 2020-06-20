import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { required, maxLengthCreator, minLengthCreator } from '../../../../utils/validators/validators'
import { Textarea, createField } from '../../../formsControls/FormsControls'

const max = 15
const min = 2

const maxLength = maxLengthCreator(max);
const minLength = minLengthCreator(min);

type PropsType = {
  profilesPage: any
  addNewPost: (text: string) => void
}
type FormFieldsType = { newPostText: string }
type CreateFieldNamesType = Extract<keyof FormFieldsType, string>

const MyPostsForm: React.FC<InjectedFormProps<FormFieldsType, {}, string>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.textarea}>
        {createField<CreateFieldNamesType>(Textarea, 'newPostText', "new post text", [required, minLength, maxLength], {}, '')}
      </div>
      <div className={styles.buttons}>
        <button>Add post</button>
      </div>
    </form>
  );
}

type PostPropsType = {
  id: string
  http: string
  message: string
  countLikes: number
}

const MyPostsFormRedux = reduxForm<FormFieldsType, {}, string>({ form: 'myPostsForm' })(MyPostsForm)

const MyPosts: React.FC<PropsType> = (props) => {
  let postsElements = props.profilesPage.posts.map((p: PostPropsType) =>
    <Post key={p.id} countLikes={p.countLikes} message={p.message} http={p.http} />)
  const addMyPost = (formData: any) => { props.addNewPost(formData.newPostText) }
  return (
    <div className={styles.active}>
      <h3 className={styles.my_post}>My Post</h3>
      <MyPostsFormRedux onSubmit={addMyPost} />
      {postsElements}
    </div>
  );
}

export default MyPosts;