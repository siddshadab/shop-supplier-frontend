import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import HomeCategories from './components/HomeCategories';
import Footer from './components/Footer';
import SearchMain from './components/SearchMain';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import NotFound from './components/NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import AdPosting from './components/AdPosting';
import RegisterUser from './components/RegisterUser';
import ViewAds from './components/ViewAds';
import ViewAd from './components/ViewAd';
import ViewCategoryAds from './components/ViewCategoryAds';
// import UserSummery from './components/UserSummery';
// import {getFromStorage, setInStorage} from './utils/storage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header/>
          <Switch>
            <Route path="/" exact render={props => 
                <div>
                  <SearchMain/>
                  <HomeCategories/>
                </div>
                }>
            </Route>
            <Route path='/user-account' render={props => <div><RegisterUser/></div>}></Route>
            <Route path='/view-ads' render={props => <div><ViewAds/></div>} ></Route>
            <Route path='/view-ad/:id' render={props => <div><ViewAd/></div>} ></Route>
            <Route path='/view-category-ads' render={props => <div><ViewCategoryAds/></div>}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          <Footer/>
          {/* <UserSummery/> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
