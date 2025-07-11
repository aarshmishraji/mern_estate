import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import SignIn from './pages/Signin';
import About from './pages/about';
import Home from './pages/Home';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/sign-up' element = {<SignUp/>}/>
      <Route path='/sign-in' element = {<SignIn/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/listing/:listingId' element={<Listing />} />
      <Route path='/search' element={<Search />} />
      <Route element={<PrivateRoute/>}>
      <Route path='/Profile' element = {<Profile/>}/>
      <Route path='/create-listing' element={<CreateListing />} />
       <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
