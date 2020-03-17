import React, { useEffect, Fragment, useState } from 'react';
import { NavLink  } from 'react-router-dom'

let PageFilms = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let fetchAPI = fetch(`https://swapi.co/api/films/`).then(response => response.json());
        fetchAPI.then(data => {
            setData(data);
            setLoading(false);
        })
    }, []);

    return (
        <Fragment>
            <h1>Page Films</h1>
            <div className="row">
                <div className="wrapper-film container-fluid d-flex flex-wrap">
                    {
                        loading ? (
                            <div className="spinner-border" role="status">
                            </div>
                        ) : (
                                data.results.map(({ title }, index) => (
                                    <div key={title} className="col-sm-3 film-item" >
                                        <img alt={title} src={`https://starwars-visualguide.com/assets/img/films/${index + 1}.jpg`} />
                                        <NavLink to={`/films/${index + 1}`} className="film-title" id={index + 1} >{title}</NavLink>
                                    </div>
                                ))
                            )
                    }

                </div>
            </div>
        </Fragment>
    );
}
export default PageFilms;