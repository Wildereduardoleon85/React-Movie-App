import React from 'react'

export const Sort = ({getTopRated, getUpcoming, getNowPlaying, getPopular}) => {
    return (
        <section className="sort">
            <nav>
                <a onClick={getTopRated}>Top Rated</a>
                <a onClick={getNowPlaying}>Now Playing</a>
                <a onClick={getPopular}>Popular</a>
                <a onClick={getUpcoming}>Upcoming</a>
            </nav>
        </section>
    )
}



