import React from 'react'
import {Routes, Route} from 'react-router'
import { StyledContainer } from './Components/Styles'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'

import './App.css'

function App() {
  return (
    <StyledContainer>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
    </StyledContainer>
  );
}

export default App;
