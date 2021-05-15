import React from 'react';
import Home from './route/Home';
import { HashRouter,BrowserRouter, Route } from 'react-router-dom';
import About from './route/About';
import Navigation from './component/Navigation';
import Detail from './component/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}/>
    </BrowserRouter>
  )
}
export default App;