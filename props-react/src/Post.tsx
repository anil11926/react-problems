import React from 'react'
import PosttTitle from './PostTitle';
import PostBody from './PostBody';
import PostTitle from './PostTitle';
type postProps = {
    title:string;
    body:string;
}

function Post({title,body}:postProps) {
  return (
    <>
      <PostTitle title={title}></PostTitle>
      <PostBody body={body}></PostBody>
    </>
  )
}

export default Post