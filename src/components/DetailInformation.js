import React from 'react';

let DetailInformation = (props) => {
const { data, id } = props;
console.log(id);

let styles = {
    img: {
        height: '400px',
        display: 'block',
        width: '100%',
        marginBottom: '15px',
        objectFit: 'contain'
    }
}

if(!id) {
    return (<img alt="StaticImage" style={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" / >)
} else {

    return(
        <>
            <img className="img-thumbnail" alt={data.name} style={styles.img} src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                <ul className="list-group">
                    <li className="list-group-item"> <h3>Information:</h3> </li>
                    <li className="list-group-item"> Hair color: <small>{data.hair_color}</small> </li>
                    <li className="list-group-item"> Gender: <small>{data.gender}</small></li>
                    <li className="list-group-item"> Height: {data.height}</li>
                    <li className="list-group-item"> Mass: {data.mass}</li>
                    <li className="list-group-item"> Eye_color: {data.eye_color}</li>
                    <li className="list-group-item"> Skin_color: {data.skin_color}</li>
                </ul>
        </>
    );
}

}

export default DetailInformation;