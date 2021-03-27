import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addPost } from '../actions'

const PostsModal = dispatchPosts => {
  const { dispatchAddPost, addPostBool, setAddPostBool } = dispatchPosts
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [text, setText] = useState('')

  const submitPost = () => {
    dispatchAddPost(title, image, text)
    setAddPostBool(false)
  }

  return (
    <Modal show={addPostBool}>
      <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New Post</h5>
        </div>
        <div className="modal-body">
            <form id="myForm" method="post">
                <label>Post Title</label>
                <input className="form-control" onChange={e => setTitle(e.target.value)} placeholder="Enter post title"></input>
                <br/>
                <label>Image Url</label>
                <input className="form-control" onChange={e => setImage(e.target.value)} placeholder="Enter image url"></input>    
                <br/>
                <label>Description</label>
                <input className="form-control" onChange={e => setText(e.target.value)} placeholder="Enter description"></input>         
            </form>
            <div className="modal-footer">
               <button type="button" className="btn btn-success" onClick={submitPost}>Save</button>
                <button type="button" className="btn btn-primary" onClick={() => setAddPostBool(false)}>Cancel</button>
            </div>
        </div>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost:
    (title, image, text) => dispatch(addPost(title, image, text)),
})

export default connect(null, mapDispatchToProps)(PostsModal)
