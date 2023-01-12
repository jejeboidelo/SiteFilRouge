import React, {useEffect} from "react";
import {useState} from "react";
import {type} from "@testing-library/user-event/dist/type";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";
import Film_info from "../Film_info/Film_info";
import BarRecherche from "../BarRecherche/BarRecherche";
import ListeFilm from "../ListeFilm/ListeFilm";
import store from "../../store/store";



export default function Main (){


    //state

    const [showListe, setshowListe] = useState(true);
    const [InfoFilm, setInfofilm] = useState({})
    const [films,setFilms] = useState([]);

    //Comportement

    const handleClick = async  (url) => {
        setshowListe(true);
        await fetch(url)
            .then(res => res.json())
            .then((response)=>{
                const data = response.results;
                // console.log(data);
                setFilms(data);

            })
        // console.log()

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

        <div className="page">
            <p>{store.getState().value}</p>
            <BarRecherche handleChange={(e) => handleClick(e)} ></BarRecherche>

            { showListe &&
                <ListeFilm className="margetop" ListeFilm={films} handleChange={(e) => log(e)}></ListeFilm>

            }

            {!showListe &&
                <Film_info className="margetop" InfoFilm={InfoFilm} envoieRetour={getRetour} > </Film_info>
            }

        </div>
    );




}

