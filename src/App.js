import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router-dom'
import PageFilms from './components/PageFilms';
import Modal from './components/Modal';
import StarShipsPage from './components/StarShipsPage';
import SinglePage from './components/SinglePage';
import HelloWindow from './components/HelloWindow';
import SideBar from './components/SideBar';

let App = (props) => {

  let [popup, setPopup] = useState(false);

  let showModal = () => {
    setTimeout(() => {
      setPopup(true);
    }, 4000)
  }

  useEffect(() => {
    showModal();
  }, []);

// vlad

  return(
    <>
    {/* // <ThemeContext.Provider value={themes.dark}> */}
      {localStorage.getItem('name') ? (<><HelloWindow /> <SideBar /></>) : ''}
        <Header />
        <div className="container wrapper-app">
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/films' component={PageFilms}/>
            <Route exact path='/films/:id' component={SinglePage}/>
            <Route exact path='/starships' component={StarShipsPage}/>
          </Switch>
        </div>

      { popup && <Modal showModal={showModal} /> }
    {/* // </ThemeContext.Provider> */}
    </>
  );
}
export default App;