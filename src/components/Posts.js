import React, { useState } from 'react'
import { connect } from 'react-redux'
import PostsModal from './PostsModal'
import Post from './Post'

const Posts = ({ posts }) => {
    const [addPostBool, setAddPostBool] = useState(false)

    const addPostHelper = () => {
      setAddPostBool(true)
    }

    return (
        <div className="container">
          { addPostBool ? <PostsModal addPostBool={addPostBool} setAddPostBool={setAddPostBool} /> : ''}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#postModal" onClick={addPostHelper}> Add Post </button>
            <br></br>
            <p align="center">
              {posts.map(post => <Post key={post.id} post={post}/> )}
            </p>
        </div>
    )
  }
  
  const mapStateToProps = state => ({
    posts: state.posts,
  })
  
  export default connect(mapStateToProps)(Posts)