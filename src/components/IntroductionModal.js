import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editIntro } from '../actions'

const IntroductionModal = dispatchIntro => {
    const {introduction, dispatchEditIntroduction, editIntroBool, setEditIntroBool } = dispatchIntro
    const [image, setImage] = useState(introduction.image)
    const [description, setDescription] = useState(introduction.description)

    const submit = () => {
        setEditIntroBool(false)
        dispatchEditIntroduction(image, description)
      }

    return (
      <Modal show={editIntroBool} backdrop="static" keyboard="false">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">About Me</h5>
        </div>
        <div className="modal-body">
            <form id="myForm" method="post">
                <label>Image Url</label>
                <input className="form-control" value={image} onChange={e => setImage(e.target.value)} placeholder="Enter image URL"></input>
                <br/>
                <label>Bio</label>
                <input className="form-control" value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter Bio"></input>            
            </form>
            <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={submit}>Save</button>
                <button type="button" className="btn btn-primary" onClick={() => setEditIntroBool(false)}>Cancel</button>
            </div>
        </div>
      </Modal>
    )
  }

const mapDispatchToProps = dispatch => ({
    dispatchEditIntroduction:
      (image, description) => dispatch(editIntro(image, description)),
  })
  
  const mapStateToProps = state => ({
    introduction: state.introduction,
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(IntroductionModal)