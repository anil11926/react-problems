import React from 'react'
type postBody = {
    body:string;
};

function PostBody({body}:postBody) {
  return (
    <>
      <h1>Post Body {body}</h1>
    </>
  )
}

export default PostBody