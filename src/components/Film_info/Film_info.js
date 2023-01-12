import {useEffect, useImperativeHandle, useState} from "react";

export default function Film_info({InfoFilm,envoieRetour}){




    //
    useEffect(() => {
        console.log(InfoFilm);

    }, [InfoFilm])

    const base_url_img = `https://image.tmdb.org/t/p/original`;


    return (
        <div className="margintop">
            <div className="moncontain">

                <div className="contentDiv">
                    <p>{InfoFilm.hasOwnProperty("original_title")?InfoFilm.original_title:"pas de titre"}</p>
                    <br/>
                    <p>{InfoFilm.hasOwnProperty("overview")?(InfoFilm.overview==""?"Pas de description":InfoFilm.overview):"Pas de description"}</p>
                </div>


                <img id="img1" className="col-5" src={base_url_img+InfoFilm.poster_path}/>
            </div>


            <button className="btn btn-outline-primary" onClick={envoieRetour}>
                Retour <span>  </span>
                {/*La balise i ne marchait pas donc j'ai abandonné .....  */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>

        </div>
    )
}