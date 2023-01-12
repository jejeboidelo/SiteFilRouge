import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './BarRecherche.scss';
import store from "../../store/store";

export default function BarRecherche(props) {
    const url1 = "https://api.themoviedb.org/3/search/movie?api_key=c2828da26326a5b861855a7a169a987c&query=";
    const [urlRecherche,setUrlRecherche] = useState("")
    const [titre,setTitre]= useState("")

    const clickhisto = (histo) => {
        console.log(histo)
        props.handleChange(url1+histo);
    }

    return (
        <div className="BarRecherche">
            <h1 id="titre">Recherche de site</h1>
            <p id="dedicaceabibi">(par Jérémie Le Pen)</p>
            <div id="divBarRec">
                <div className="itemcenter">
                    <label >
                        <input type="text" name="barreRecherche" onChange={event => {setUrlRecherche(url1+event.target.value);setTitre(event.target.value)}}/>
                    </label>
                    <button className="btn btn-outline-primary" onClick={() => {props.handleChange(urlRecherche);store.dispatch({type:'ADD',recherche:titre});}}>recherche</button>
                </div>
                <div className="itemright">
                    {store.getState().map(
                        histo => (
                            <button key={histo} className="btn btn-outline-primary mesboutons" onClick={() => clickhisto(histo)}>
                                {histo}
                            </button>
                        )
                    )}
                </div>
            </div>

        </div>
    )


}

