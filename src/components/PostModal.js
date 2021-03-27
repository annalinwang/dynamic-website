import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editPost, deletePost } from '../actions'

const PostModal = dispatchPost => {
  const { post, dispatchEditPost, dispatchDeletePost, editPostBool, setEditPostBool } = dispatchPost
  const [title, setTitle] = useState(post.title)
  const [image, setImage] = useState(post.image)
  const [text, setText] = useState(post.description)

  const updatePost = () => {
    dispatchEditPost(post.id, title, image, text)
    setEditPostBool(false)
  }

  const postDelete = () => {
    console.log(post.id)
    setEditPostBool(false)
    dispatchDeletePost(post.id)
  }

  return (
    <Modal show={editPostBool}>
      <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Edit Post</h5>
        </div>
        <div className="modal-body">
            <form id="myForm" method="post">
                <label>New Title</label>
                <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter post title"></input>
                <br/>
                <label>New Image Url</label>
                <input className="form-control" value={image} onChange={e => setImage(e.target.value)} placeholder="Enter image url"></input>    
                <br/>
                <label>New Description</label>
                <input className="form-control" value={text} onChange={e => setText(e.target.value)} placeholder="Enter description"></input>         
            </form>
            <div className="modal-footer">
               <button type="button" className="btn btn-success" onClick={updatePost}>Save</button>
                <button type="button" className="btn btn-primary" onClick={() => setEditPostBool(false)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={(postDelete)}>Delete</button>
            </div>
        </div>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost:
    (id, title, image, description) => dispatch(editPost(id, title, image, description)),

  dispatchDeletePost:
    (id) => dispatch(deletePost(id)),
})

export default connect(null, mapDispatchToProps)(PostModal)
