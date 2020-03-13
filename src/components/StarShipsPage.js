import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


let StarShipsPage = () => {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const styles = {
        li: {
            marginBottom: '20px'
        }
    }

    useEffect(() => {
        let fetchAPI = fetch(`https://swapi.co/api/starships/`).then(response => response.json());
        fetchAPI.then(data => {
            setData(data);
            setLoading(false);
        })
    }, []);
console.log(data);
    return (
        <>
            <h1>Page Starships</h1>
            <div className="row">
                <div className="wrapper-film container-fluid">
                    {
                        loading ? (
                            <div className="spinner-border" role="status"></div>
                        ) : (
                                data.results.map(({ name }, index) => (
                                    <ul className="list-group" key={name} >
                                        <li style={styles.li} id={index + 1} className="list-group-item">{name}</li>
                                    </ul>
                                ))
                            )
                    }
                </div>
            </div>
        </>
    );
}
export default StarShipsPage;