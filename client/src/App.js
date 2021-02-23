import React from 'react';
import Nav from './components/Nav/Nav';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import BestOfWinnipeg from './pages/BestOfWinnipeg/BestOfWinnipeg';
import Restaurants from './pages/Restaurants/Restaurants';
import LatestNews from './pages/LatestNews/LatestNews';
import Places from './pages/Places/Places';
import Videos from './pages/Videos/Videos';
import Contests from './pages/Contests/Contests';
import Neighbourhoods from './pages/Neighbourhoods/Neighbourhoods';
import Patios from './pages/Patios/Patios';

export const App = () => {
  return (
  <>
  <BrowserRouter>
    <Nav/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/BestOfWinnipeg' component={BestOfWinnipeg}/>
      <Route path='/Restaurants' component={Restaurants}/>
      <Route path='/LatestNews' component={LatestNews}/>
      <Route path='/Places' component={Places}/>
      <Route path='/Videos' component={Videos}/>
      <Route path='/Contests' component={Contests}/>
      <Route path='/Neighbourhoods' component={Neighbourhoods}/>
      <Route path='/Patios' component={Patios}/>
    </Switch>
    </BrowserRouter>
  </>
  )
}

export default App