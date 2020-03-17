import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
    return(
        <li className="list-group-item" id={props.id} key={props.id} onClick={props.clickAction}>
            {props.name}
        </li>
    );
}


ListItem.propTypes = {
    clickAction: PropTypes.func,
    name: PropTypes.string
}

export default ListItem;