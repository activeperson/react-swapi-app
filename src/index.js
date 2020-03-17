import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import ThemeContext from './ThemeContext';
import { Provider } from 'react-redux'
import { store } from './store/configureStore';




function WrapperApp(){

    return(
        <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
        </Provider>
    );
}

const rootElement = document.getElementById('root');

ReactDOM.render(<WrapperApp />, rootElement);
    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
