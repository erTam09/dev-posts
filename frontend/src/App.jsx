import React from 'react'
import Navbar from './Components/Navbar'
import GetPosts from './Components/GetPosts'
import CreatePosts from './Components/CreatePosts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PostCreateNFetch from './Components/PostCreateNFetch';
import EditPost from './Components/EditPost';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<PostCreateNFetch/>} />
          <Route path='/post/:id' element={<EditPost/>} />
        </Routes>
    
      </BrowserRouter>
     
    </div>
  )
}

export default App
