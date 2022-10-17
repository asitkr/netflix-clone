import axios from '../Axios';
import React, { useEffect, useState } from 'react';
import './Row.css';

const Row = ({ title, fetchURL, isLargeRow = false }) => {
    
    const [movies, setMovies] = useState([]);

    const baseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchURL])

    console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
                {
                    movies.map(movie => (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${baseURL}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Row;