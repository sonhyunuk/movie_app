import React from 'react';
import PropType from 'prop-types';
import './Movies.css'
import { Link } from 'react-router-dom';

const Movies = ({  year, title, summary, poster, genres }) => {
    return (
        <Link to={{
            pathname : '/movie-detail',
            state : {
                year : year,
                title : title,
                summary : summary,
                poster : poster,
                genres : genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title}></img>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="genres">{genres.map((genre, index) => (
                        <li className="genre" key={index} >{genre}</li>
                    ))}</ul>
                    <p className="movie__summary">{summary.slice(0, 180)}</p>
                </div>
            </div>
        </Link>
    )
}
Movies.PropType = {
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired,

}

export default Movies;