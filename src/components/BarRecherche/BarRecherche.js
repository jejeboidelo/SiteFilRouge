import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './BarRecherche.scss';

export default function BarRecherche(props) {
    const url1 = "https://api.themoviedb.org/3/search/movie?api_key=c2828da26326a5b861855a7a169a987c&query=";
    const [urlRecherche,setUrlRecherche] = useState("")

    return (
        <div className="BarRecherche">
            <div>
                <h1>Recherche</h1>
                <label>
                    Ma barre de recherche :
                    <br/>
                    <input type="text" name="barreRecherche" onChange={event => {setUrlRecherche(url1+event.target.value)}}/>
                </label>
                <button className="btn btn-outline-primary" onClick={() => {props.handleChange(urlRecherche)}}>recherche</button>
            </div>
        </div>
    )
}

