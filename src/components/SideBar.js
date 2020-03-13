import React, { useContext } from 'react';
// import { ThemeContext } from "./ThemeContext";


const SideBar = () => {


    // const { theme, toggleTheme } = useContext(ThemeContext);
// const { theme, toggleTheme } = useContext(ThemeContext);


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
                    <button type="button" className="btn btn-light">Light</button>
                </li>
            </ul>
            
        </div>
    );

}


export default SideBar;