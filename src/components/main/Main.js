import React, {useEffect} from "react";
import {useState} from "react";
import {type} from "@testing-library/user-event/dist/type";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";
import Film_info from "../Film_info/Film_info";



export default function Main (){


    //state

    const apiKey = "c2828da26326a5b861855a7a169a987c";
    const url1 = "https://api.themoviedb.org/3/search/movie?api_key=c2828da26326a5b861855a7a169a987c&query=";
    const base_url_img = `https://image.tmdb.org/t/p/original`;

    const [urlRecherche,setUrlRecherche] = useState("")
    const [showListe, setshowListe] = useState(true);
    const [InfoFilm, setInfofilm] = useState({})
    const [films,setFilms] = useState([]);

    //Comportement

    const handleClick = async  () => {
        setshowListe(true);
        await fetch(urlRecherche)
            .then(res => res.json())
            .then((response)=>{
                const data = response.results;
                // console.log(data);
                setFilms(data);

            })

    };

    const log = async (id) => {
        setshowListe(false);
        await fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=c2828da26326a5b861855a7a169a987c&language=fr-FR")
            .then(res => res.json())
            .then(res => {
                const data = res;
                setInfofilm(data);
            })

    }

    const getRetour = () => {
        setshowListe(true);
        setInfofilm({})
    }


    //affichage
    return (
        // <div className="page" style={{height:  films?(showListe?films.length==0?"100vh":"auto":"100vh"):"100vh"}}>
        <div className="page">
            <div>
                <h1>Recherche</h1>
                <label>
                    Ma barre de recherche :
                    <br/>
                    <input type="text" name="barreRecherche" onChange={event => {setUrlRecherche(url1+event.target.value)}}/>
                </label>
                <button className="btn btn-outline-primary" onClick={handleClick}>recherche</button>
            </div>

            { showListe &&
                <div className="container">
                    <div className="row">
                        {films && films.length!=0 &&
                            films.map(film => (
                            <div className="col-3 card " style={{background: "#ffe5d1"}}>
                                <img className="test" src={base_url_img + film.poster_path}/>
                                <div className="card-body">
                                    <h5 className="card-title">{film.original_title}</h5>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        log(film.id)
                                    }}>Details
                                    </button>
                                    {/*<button onClick={()=> {setIDfilm(film.id)}}>test</button>*/}
                                </div>
                            </div>
                        ))
                        }
                        {
                            films && films.length==0 &&
                            <p>pas de resultat</p>
                        }

                    </div>
                </div>}


            {!showListe &&
                <Film_info InfoFilm={InfoFilm} envoieRetour={getRetour} > </Film_info>
            }


        </div>
    );




}
