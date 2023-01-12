import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ListeFilm.scss';
import store from "../../store/store";

export default function ListeFilm(props) {
    const base_url_img = `https://image.tmdb.org/t/p/original`;
    return (
        <div className="container margintop">
            <div className="row">
                {props.ListeFilm && props.ListeFilm.length!=0 &&
                    props.ListeFilm.map(film => (
                        <div key={film.id} className="col-3 card " style={{background: "#ffe5d1"}}>
                            <img className="test" src={base_url_img + film.poster_path}/>
                            <div className="card-body">
                                <h5 className="card-title">{film.original_title}</h5>
                                <button className="btn btn-outline-primary"
                                        onClick={() => {props.handleChange(film.id)}}>Details
                                </button>
                            </div>
                        </div>
                    ))
                }
                {
                    props.ListeFilm && props.ListeFilm.length==0 &&
                    <p>pas de resultat</p>
                }

            </div>
        </div>
    )
}




