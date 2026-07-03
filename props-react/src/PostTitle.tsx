import React from 'react'
type postTile = {
    title:string;
}
function PostTitle({title}:postTile) {
  return (
    <>
      <h1>Post Title {title}</h1>
    </>
  )
}
export default PostTitle