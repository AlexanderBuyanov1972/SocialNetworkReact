import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
  return (
    <div>
      <ProfileInfo text='ava + description' src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
      <MyPosts />
    </div>
  );
}
export default Content;