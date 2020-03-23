import React from 'react';
import PropTypes from 'prop-types';

const SideBar = (props) => {
const onBtnClick = (e) => {
    props.setTheme(false);
    // document.body.className = `${localStorage.getItem('themeSettings')}`;
    // console.log(theme);


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

SideBar.propTypes = {
    theme: PropTypes.object
}


export default SideBar;