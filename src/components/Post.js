import React, { useState } from 'react'
import PostModal from './PostModal'

const Post = ({ post }) => {

  const [editPostBool, setEditPostBool] = useState(false)

  return (
    <div className="card" style={{ width: '18rem' }}>
      { editPostBool ? <PostModal post={post} editPostBool={editPostBool} setEditPostBool={setEditPostBool} /> : ''}
      <div className="col">
          <img className = 'card-img-top' src = {post.image} />
      </div>
      <div className="card-title">
        <h5>
        #{post.id}: {post.title}
        </h5>
      </div>
      <div className="card-text"> {post.description} </div>
      <button type="button" className="btn btn-primary" onClick={() =>  setEditPostBool(true)}>Edit Post</button>
    </div>
  )
}

export default Post
