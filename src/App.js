import React, { Component } from 'react'
import AppBar from './Components/AppBar'
import Work from './Components/work/Work'

class App extends Component {
  render () {
    return (
      <div>
        <AppBar />
        <Work />
      </div>
    )
  }
}

export default App
