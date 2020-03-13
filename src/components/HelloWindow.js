import React from 'react';



let HelloWindow = () => {

    return(
        <div className="small-window">
            <h1>Hello, <small>{localStorage.getItem('name')}</small></h1>
        </div>
    );
    
}

export default HelloWindow;