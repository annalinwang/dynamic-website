import React, { Component, useState } from 'react'
import Posts from './Posts'
import Introduction from './Introduction'


const App = () => {
    return (
      <div>
        <Introduction/>
        <br></br>
        <Posts/>
        <br></br>
      </div>
    )
  }

export default App
  