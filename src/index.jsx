// STYLES
import style from '../public/sass/style.scss';
import React ,{Component} from 'react';
import {render} from 'react-dom';
import Nav from './components/Nav';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from './components/Home';
import Examples from './components/Examples';

const App =()=>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/example" component={Examples}/>


      </Switch>
    </BrowserRouter>
  )
}

render(
  <App/>,
  document.getElementById('app')
);
