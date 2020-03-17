import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext, { themes } from './ThemeContext';
import { Provider } from 'react-redux'
import { store } from './store/configureStore';




function WrapperApp(){

    const [theme, setTheme] = useState(themes.light);
    // const toggleTheme = () => {
    //     if (theme === themes.light){
    //         setTheme(themes.dark);
    //         localStorage.setItem('themeSettings', themes.dark.classes);
    //     } else {
    //         setTheme(themes.light);
    //         localStorage.setItem('themeSettings', themes.light.classes);
    //     }
    // }

    return(
        <Provider store={store}>
            <ThemeContext.Provider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeContext.Provider>
        </Provider>
    );
}

const rootElement = document.getElementById('root');

ReactDOM.render(<WrapperApp />, rootElement);
    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
