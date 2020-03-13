import React from 'react';


const ListItem = (props) => {
    return(
        <li className="list-group-item" id={props.id} key={props.id} onClick={props.clickAction}>
            {props.name}
        </li>
    );
}


export default ListItem;