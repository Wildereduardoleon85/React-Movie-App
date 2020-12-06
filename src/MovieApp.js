import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Results } from './components/Results/Results';
import { Single } from './components/Single/Single';
import { Sort } from './components/Sort';
import axios from 'axios';
import './index.css';


export const MovieApp = () => {

    const [state, setState] = useState({
        search: '',
        results: [],
        selected: []
    });

    const handleInput = (e)=>{
        setState(prevState => {
            return {...prevState, search: e.target.value}
        });

    };

    useEffect(() => {
        getNowPlaying();
    }, []);


    const getTopRated = ()=>{
            axios('https://api.themoviedb.org/3/movie/top_rated?api_key=b2498ab40cbd0c2889af00915afea30f').then((data)=>{
            let topRated = data.data.results;
            setState(prevState=>{
                return {...prevState, results: topRated}
            })
        })
    }

    const getUpcoming = ()=>{
            axios('https://api.themoviedb.org/3/movie/upcoming?api_key=b2498ab40cbd0c2889af00915afea30f').then((data)=>{
            let upComing = data.data.results;
            setState(prevState=>{
                return {...prevState, results: upComing}
            })
        })
    }


    const getNowPlaying = ()=>{
            axios('https://api.themoviedb.org/3/movie/now_playing?api_key=b2498ab40cbd0c2889af00915afea30f').then((data)=>{
            let nowPlaying = data.data.results;
            setState(prevState=>{
                return {...prevState, results: nowPlaying}
            })
        })
    }

    const getPopular = ()=>{
            axios('https://api.themoviedb.org/3/movie/popular?api_key=b2498ab40cbd0c2889af00915afea30f').then((data)=>{
            let nowPlaying = data.data.results;
            setState(prevState=>{
                return {...prevState, results: nowPlaying}
            })
        })
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        axios(`https://api.themoviedb.org/3/search/movie?api_key=b2498ab40cbd0c2889af00915afea30f&query=${state.search}`).then((data)=>{
            
            let result = data.data.results;
            setState(prevState=>{
                return {...prevState, results: result}
            });
            
        })
    }

    const getSingle = (e)=>{
        axios(`https://api.themoviedb.org/3/movie/${e.target.id}?api_key=b2498ab40cbd0c2889af00915afea30f`).then((data)=>{
            
            let single = data.data;
            setState(prevState=>{
                return {...prevState, selected: single}
            });
            
        })
    }

    const closeSingle = ()=> {
        setState(prevState=>{
            return {...prevState, selected: []}
        });
        // console.log(state.selected);
    }

    document.body.style.background = Object.keys(state.selected).length > 0 ? 'black' : "url('./img/background.jpg')";
    document.body.style.backgroundSize = Object.keys(state.selected).length > 0 ? null : "cover";
    document.body.style.backgroundRepeat = Object.keys(state.selected).length > 0 ? null : "no-repeat";
    document.body.style.backgroundColor = Object.keys(state.selected).length > 0 ? null : "black";
    
    return (
        <>
            <header>
                {Object.keys(state.selected).length > 0 ? null : <Header/>}
            </header>
            <main>
                {Object.keys(state.selected).length > 0 ? null : 
                <Search handleInput={handleInput} handleSubmit={handleSubmit}/> }
                
                {Object.keys(state.selected).length > 0 ? null : 
                <Sort getPopular={getPopular} getNowPlaying={getNowPlaying} getTopRated={getTopRated} getUpcoming={getUpcoming}/>}
                
                {Object.keys(state.results).length === 0 ? <h1 style={{textAlign:'center'}}>Loading...</h1> : null}
                
                {Object.keys(state.selected).length > 0 ? null : 
                <Results results={state.results} getSingle={getSingle}/>}
                
                {Object.keys(state.selected).length !== 0 ? <Single selected={state.selected} closeSingle={closeSingle}/> : false}
            </main>
        </>
    )
};
