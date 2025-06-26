import React from 'react'
import Navbar from './Components/Navbar'
import GetPosts from './Components/GetPosts'
import CreatePosts from './Components/CreatePosts'

const App = () => {
  return (
    <div>
      <Navbar/>
      <CreatePosts/>
      <GetPosts/>
    </div>
  )
}

export default App
