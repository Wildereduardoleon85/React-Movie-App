import React from 'react';
import './single.css';

export const Single = ({selected, closeSingle}) => {
    
    // console.log(selected)

    return (
        <section className="single">
            <div className="container">
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w500${selected.poster_path}`}></img>
                </div>

                <div className="content">
                    <h1>{selected.title} <span>({`${(selected.release_date.split('-'))[0]}`})</span></h1>
                    <p className="subtitle">
                        <span>{`${Math.floor((selected.runtime)/(60))}hr ${(((((selected.runtime/60) 
                        - Math.floor(selected.runtime/60))*30)/0.5)).toFixed(0)}min`}&nbsp; &nbsp;</span>
                        {selected.genres.map((genre)=>{
                            return <span key={genre.id}>{genre.name} &nbsp; &nbsp;</span>
                        })}
                        <span><i className="fas fa-star"></i> {selected.vote_average}</span>
                    </p>
                    
                    <div className="overview">
                        <h3>Overview:</h3>
                        <p>{selected.overview}</p>
                    </div>

                    <p><b>Language: </b><span>{selected.original_language.toUpperCase()}</span></p>
                    <p><b>Release Date: </b><span>{selected.release_date}</span></p>
                
                    <div className="prod">
                        <p>
                            <b>Production:</b>
                        </p>
                        <div>
                            {selected.production_companies.map((prod)=>{
                                return  <small key={prod.id}>{prod.name}&nbsp; &nbsp;</small>
                            })}
                        </div>
                    </div>
                    
                    <div className="links">
                        <a href={`https://www.imdb.com/title/${selected.imdb_id}/?ref_=hm_tpks_tt_1_pd_tp1`} target="_blank">View on IMDB</a>
                        <a href={selected.homepage} target="_blank">Home Page</a>
                    </div>
                   

                    <button onClick={closeSingle}>Close</button>

                    
                </div>
                
                
            </div>
        </section>
    )
}
