import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todo from './components/todo/todo';
import Message from './components/onlineMessage/message';
import Home from './components/Home';
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Route } from "react-router-dom";
import '@progress/kendo-theme-default/dist/all.css';

class App extends Component {

  render() {
    return (
      <Router>
				<ScrollToTop>
					<Header/>
					<Route exact={true} path={'/'} component={Home}/>
					<Route path={'/todo'} component={Todo} />
					<Route path={'/online-message'} component={Message} />
					<Footer/>
				</ScrollToTop>
			</Router>
    )
  }
}



export default App;
