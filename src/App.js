import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  pageSize=10;
  apiKey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact  path='/' element={<News key={'general'} apiKey={this.apiKey} pageSize={this.pageSize} category={'general'}/>}/>
        <Route exact  path='/general' element={<News key={'general'} apiKey={this.apiKey} pageSize={this.pageSize} category={'general'}/>}/>
        <Route exact path='/business'element={<News key={'business'} apiKey={this.apiKey} pageSize={this.pageSize} category={'business'}/>}/>
        <Route exact path='/sports'element={<News key={'sports'} apiKey={this.apiKey} pageSize={this.pageSize} category={'sports'}/>}/>
        <Route exact path='/technology'element={<News  key={'technology'} apiKey={this.apiKey}pageSize={this.pageSize} category={'technology'}/>}/>
        <Route exact path='/health'element={<News key={'health'} apiKey={this.apiKey} pageSize={this.pageSize} category={'health'}/>}/>
        <Route exact path='/science'element={<News  key={'science'} apiKey={this.apiKey}pageSize={this.pageSize} category={'science'}/>}/>
        <Route exact path='/entertainment'element={<News key={'entertainment'} apiKey={this.apiKey} pageSize={this.pageSize} category={'entertainment'}/>}/>
      </Routes>
  
      </Router>
     
      
      </>
    )
  }
}

