import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';
function App() {
  let pageSize = 10;
  let apiKey = process.env.REACT_APP_NEWS_API
  // let myApi = "36be801007df441790755bb831040f91"
  
  return (
    <BrowserRouter>
    <div className="App">
      {/* <News pageSize={pageSize} country={"in"} category={"Business"}></News> */}
      
      <Navbar exact path='/'></Navbar>
      
      <Routes>
      <Route exact path='/' element={<News key={"general"} apiKey={apiKey} pageSize={pageSize} country={"in"} category={"general"}></News>}> </Route>
        <Route exact path='/about' element={<News key={"about"} apiKey={apiKey} pageSize={pageSize} country={"in"} category={"about"}></News>}> </Route>
        <Route exact path='/business' element={<News key={"business"} apiKey={apiKey} pageSize={pageSize} country={"in"} category={"business"}></News>}> </Route>
        <Route exact path='/entertainment' element={<News key={"entertainment"} apiKey={apiKey} pageSize={pageSize} country={"in"} category={"entertainment"}></News>}> </Route>
        <Route exact path='/general' element={<News key={"general"} apiKey={apiKey} pageSize={pageSize} country={"in"} category={"general"}></News>}> </Route>
        <Route exact path='/health' element={<News key={"health"} apiKey={apiKey} pageSize={pageSize} country={"in"} category={"health"}></News>}> </Route>
        <Route exact path='/science' element={<News key={"science"} apiKey={apiKey} pageSize={pageSize} country={"in"} category={"science"}></News>}> </Route>
        <Route exact path='/sport' element={<News key={"sport"} apiKey={apiKey} pageSize={pageSize} country={"in"} category={"sport"}></News>}> </Route>
        <Route exact path='/technology' element={<News key={"technology"} apiKey={apiKey} pageSize={pageSize} country={"in"} category={"technology"}></News>}> </Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
