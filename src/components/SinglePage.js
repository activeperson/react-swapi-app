import React, { useState, useEffect, Fragment } from 'react';


const SinglePage = (props) => {
    const pageID = props.match.params.id;
    const [data, setData] = useState({ data: [], loading: true });


    useEffect(() => {
        let fetchFilms = fetch(`https://swapi.co/api/films/${pageID}`).then(response => response.json());
        fetchFilms.then(data => setData({ data, loading: false }));
    }, []);

    const showPeoples = () => {

    }
    return (
        <Fragment>

            {data.loading ? (
                <div className="spinner-border" role="status"></div>
            ) : (
                <div className="wrapper-single-page-film">
                    <div className="container d-flex">
                        <div className="col-sm-6">
                            <img alt="FilmPicture" src={`https://starwars-visualguide.com/assets/img/films/${pageID}.jpg`} / >
                        </div>
                        <div className="col-sm-6">

                        <ul className="list-group">
                            <li className="list-group-item">{data.data.title}</li>
                            <li className="list-group-item">
                                <b>Description:</b> <br />
                                {data.data.opening_crawl.slice(0, -300) + ' ...'}
                            </li>
                            <li className="list-group-item"><b>Producer:</b> {data.data.producer}</li>
                            <li className="list-group-item"><b>Release date:</b> {data.data.release_date}</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        </div>
                    </div>
                    <hr />
                    <ul className="list-group">
                            <li className="list-group-item"><b>Peoples in this film:</b> </li>
                            <li className="list-group-item">
                            <button type="button" onClick={showPeoples} className="btn btn-primary">Show peoples</button>
                                <ul className="list-unstyled">
                                    {data.data.characters.map(({ title }, index) => (
                                        <li className="media" key={index + 'EQAWdfretqweqweda'}>
                                            <img src="" className="mr-3" alt="..." />
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-1">List-based media object</h5>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                </div>
                )}
        </Fragment>
    );

}

export default SinglePage;