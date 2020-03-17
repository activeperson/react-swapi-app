import React, { useState } from 'react';
import ThemeContext from "../ThemeContext";


const SideBar = (props) => {

const onBtnClick = (e) => {
    const { theme } = props.theme;
    if(theme === 'white-theme'){
        props.setTheme(e.target.id);
        localStorage.setItem('themeSettings', e.target.id);
    }else{
        props.setTheme('white-theme');
        localStorage.setItem('themeSettings', 'white-theme');
    }
}

const styles = {
    li: {
        textAlign: 'center'
    },
    divWrapper: {
        position: 'absolute',
        top: '15px',
        left: '15px'
    }
 }


    return(
        <div className="btn-group btn-group-toggle" style={styles.divWrapper}>
            <ul className="list-group">
                <li className="list-group-item"><h4>Theme settings</h4></li>
                <li className="list-group-item buttons" style={styles.li}>
                    <button type="button" id="black-theme" onClick={onBtnClick} className="btn btn-light">Change theme color</button>
                </li>
            </ul>
        </div>
    );

}


export default SideBar;