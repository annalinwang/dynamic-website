import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import IntroductionModal from './IntroductionModal'

const Introduction = ({introduction}) => {

    const [editIntroBool, setEditIntroBool] = useState(false)
    const {image, description} = introduction

    return (
        <>
        <br></br>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className = "container">
                    <div className="col">
                        <img className = 'introduction-image' src = {image} width="100" height="100" />
                    </div>
                    <div className="col">
                        <h3> {description} </h3>
                    </div>
                    <p align="right">
                <button type="button" className="btn btn-warning" onClick={() =>  setEditIntroBool(true)}>Edit</button>
                </p>
                </div>
            </nav>
        </div>
        { editIntroBool ? <IntroductionModal editIntroBool={editIntroBool} setEditIntroBool={setEditIntroBool} /> : ''}
        
        </>
    )
    
}

const mapStateToProps = state => ({
    //state.introduction is a different introduction
    introduction: state.introduction //in index.js combineReducers it's called introduction
})

export default connect(mapStateToProps)(Introduction)