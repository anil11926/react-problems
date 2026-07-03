import React from 'react'
import Post from './Post';


function Blog() {
  return (
    <>
        <h1>===========================</h1>
        <Post title='post1' body='post 1 body'></Post>
        <h1>===========================</h1>
        <Post title='post2' body='post 2 body'></Post>
        <h1>============================</h1>
        <Post title='post3' body='post 3 body'></Post>
        <h1>============================</h1>
        <Post title='post4' body='post 4 body'></Post>
        <h1>============================</h1>
    </>
  )
}

export default Blog