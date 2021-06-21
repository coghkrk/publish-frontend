import React, { Component } from 'react';

class Test4Sub extends Component {
    render() {
        const {movie,remove} = this.props
        return (
            <>
                <article>
                    <div className="left">
                        <img src={movie.poster} alt={movie.title}/>
                    </div>
                    <div className="right">
                        <h3>{movie.title}</h3>
                        <ul>
                            <li>Actor : {movie.actor}</li>
                            <li>Director : {movie.director}</li>
                            <li>Date : {movie.date} </li>
                        </ul>
                         <button onClick={() => remove(movie.no)}>del</button>
                    </div>
                </article>
            </>
        );
    }
}

export default Test4Sub;