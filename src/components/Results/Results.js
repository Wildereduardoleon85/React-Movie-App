import React from 'react';
import './results.css';

export const Results = ({results, getSingle}) => {

    return (
        <section className="results">
            {results.map((result)=>{
                return  <div key={result.id} 
                            className='card'
                            style={result.poster_path === null ? {display: 'none'} : null}
                            onClick={getSingle}
                            >
                            <div className="overlay_div">
                                <img    id={result.id} 
                                        src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}>
                                </img>
                            </div>
                            <div className="captions" >
                                <h3 id={result.id}>{result.title}</h3>
                                <p id={result.id}>{result.release_date}</p>
                                <div  id={result.id} className="rating"><i id={result.id} className="fas fa-star"></i>{result.vote_average}</div>
                            </div>
                        </div> 
            })}
        </section>
    )
}






