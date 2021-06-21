import React, { Component } from 'react';
import './Reset.scss'
import './Test5.scss'
import Data from './Data.json'
import styled from 'styled-components'

class Test5 extends Component {
    state = {
        movies : Data,
        movieItem : {},
        done:false
    }
    componentDidMount() {
        const {movies} = this.state
        this.setState({
            movieItem : movies[0]
        })    
    }
    handleOpen = (id) => {
        this.setState({
            done:true
        })
    }
    handleClose = () => {
        this.setState({
            done:false
        })
    }
    handleOver = (id) => {
        const {movies} = this.state
        this.setState({
            movieItem : movies.find(movie => movie.rank === id)
        })  
    }
    handleOut = () => {
        const {movies} = this.state
        this.setState({
            movieItem : movies[0]
        })  
    }
    render() {
        const { movies , movieItem , done } = this.state
        return (
            <div className="Test5">
                <div className="movie-box">
                    <article className="movie-view">
                        <img src={movieItem.thumbUrl} alt={movieItem.title} />
                        <div>
                            <h3>{movieItem.movieNm}</h3>
                            <p>Every Time I Die</p>
                            <ul>
                                <li><strong>개봉일</strong>:{movieItem.openDt}</li>
                                <li><strong>제작상태</strong>:{movieItem.moviesprdtStat}</li>
                                <li><strong>일반영화</strong>:{movieItem.moviesType}</li>
                                <li><strong>관람등급</strong>:{movieItem.watchGradeNm}</li>
                                <li><strong>상영시간</strong>:{movieItem.showTs}</li>
                                <li><strong>제작국가</strong>:{movieItem.repNationCd}</li>
                                <li><strong>감독</strong>:{movieItem.director}</li>
                                <li><strong>장르</strong>:{movieItem.genre}</li>
                                <li><strong>배급사</strong>:{movieItem.dtNm}</li>
                            </ul>
                        </div>
                    </article>
                    <article className="movie-list">
                        <table>
                            <colgroup>
                                <col className="w1"></col>
                                <col className="w2"></col>
                                <col className="w3"></col>
                                <col className="w4"></col>
                                <col className="w5"></col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>순위</th>
                                    <th>장르</th>
                                    <th>영화명</th>
                                    <th>좌석수</th>
                                    <th>증감률</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   movies.map(movie =>
                                   <tr key={movie.rank}
                                       onMouseOver = {() => this.handleOver(movie.rank)}
                                       onMouseOut = {this.handleOut}
                                       onClick = {() => this.handleOpen(movie.rank)}
                                   >
                                       <td>{movie.rank}</td>
                                       <td>{movie.genre}</td>
                                       <td>{movie.movieNm}</td>
                                       <td>{movie.audiCnt}</td>
                                       <td>{movie.salesShare}</td>
                                   </tr>)
                               }
                            </tbody>
                        </table>
                    </article>
                </div>
                {
                    done && <Modal movieItem = {movieItem}>
                        <div>
                            <h2>{movieItem.movieNm}</h2>
                            <img src={movieItem.thumbUrl} alt="" />
                            <button onClick={this.handleClose}>X</button>
                        </div>
                    </Modal>
                }
            </div>
        );
    }
}

export default Test5;
const Modal = styled.div`
    width:100%;
    height:100vh;
    position:absolute;
    left:0;
    top:0;
    background:rgba(0,0,0,0.8);
    div {
        width:600px;
        height:600px;
        background:#fff;
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50% , -50%);
        text-align:center;
        h2 {
            font-size:30px;
            padding;15px 0; 
        }
        button {
            position:absolute;
            right:0;
            top:0;
            padding:30px;
        }
    }
`