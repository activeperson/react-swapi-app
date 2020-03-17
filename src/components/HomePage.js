import React, { useState, useEffect, Fragment } from 'react';
import DetailInformation from '../components/DetailInformation';
import ListItem from '../components/ListItem';
let HomePage = () => {
    const [data, setData] = useState({ data: [], loading: true });
    const [singeData, setSingleData] = useState({dataW: [], idElem : false});

    useEffect(() => {
        let fetchAPI = fetch(`https://swapi.co/api/people/`).then(response => response.json());
        fetchAPI.then(data => {
        setData({data, loading: false});
       })

    }, []);


    let handleClick = (e) => {
        const id = e.target.id;
        const allLi = [...e.target.parentNode.children];
        const result = fetch(`https://swapi.co/api/people/${e.target.id}/`).then(response  => response.json());
        result.then(data => setSingleData({dataW: data, idElem: id}));
        allLi.forEach((elem) => {
            elem.classList.remove('active');
        });
        e.target.classList.add('active');
    }


    return (
        <Fragment>
            <h1>Home Page</h1>
            {data.loading ? (
                <div className="spinner-border" role="status"></div>
            ) : (
                    <div className="row">
                        <ul className="wrapper-people col-sm-4 list-group">
                            {data.data.results.map(({ name }, index) => (
                                <ListItem id={index + 1} key={index} name={name} clickAction={handleClick} />
                            ))}
                        </ul>
                        <div className="col-sm-8">
                            <DetailInformation data={singeData.dataW} id={singeData.idElem} />
                        </div>
                    </div>
                )}
        </Fragment>
    );
}

export default HomePage;