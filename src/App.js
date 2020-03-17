import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router-dom'
import PageFilms from './components/PageFilms';
import Modal from './components/Modal';
import StarShipsPage from './components/StarShipsPage';
import SinglePage from './components/SinglePage';
import HelloWindow from './components/HelloWindow';
import SideBar from './components/SideBar';
import { connect } from 'react-redux';
import { setTheme } from './store/actions/actionTheme';

let App = (props) => {
  let [popup, setPopup] = useState(false);

  document.body.className = `${localStorage.getItem('themeSettings')}`;



  let showModal = () => {
    setTimeout(() => {
      setPopup(true);
    }, 4000)
  }

  useEffect(() => {
    showModal();
  }, []);


  return (
    <>
      {localStorage.getItem('name') ? (<><HelloWindow /> <SideBar theme={props.theme} setTheme={props.setThemeAction} /></>) : ''}
      <Header />
      <div className="container wrapper-app">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/films' component={PageFilms} />
          <Route exact path='/films/:id' component={SinglePage} />
          <Route exact path='/starships' component={StarShipsPage} />
        </Switch>
      </div>

      {popup && <Modal showModal={showModal} />}
    </>
  );
}

const mapStateToProps = store => {
  return {
    theme: store.theme,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setThemeAction: year => dispatch(setTheme(year))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
