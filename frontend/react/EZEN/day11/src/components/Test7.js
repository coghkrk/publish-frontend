import React, { Component } from 'react';
import styled from 'styled-components'

class Test7 extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Image>
                        <img src="http://www.msoopent.com/data/file/artist/S67307161_3.jpg" alt=""/>
                    </Image>
                    <Profile>
                        <h2>공유</h2>
                        <strong>GONG YOO</strong>
                        <ul>
                            <li><em>키</em>184cm</li>
                            <li><em>데뷔</em>드라마 학교4</li>
                        </ul>
                        <h3>WORKS</h3>
                        <ul>
                            <li>
                                <em>영화</em>
                                <p>
                                    동갑내기 과외하기(2003) 그녀를 모르면 간첩(2004) 슈퍼스타 감사용(2004)
                                    S다이어리(2004) 잠복근무(2005) 용이 간다(2007) 김종욱 찾기(2010)
                                    도가니(2011) 용의자(2013) 남과 여(2016) 부산행(2016) 밀정(2016)
                                    82년생 김지영(2019) 서복(2019)
                                </p>
                            </li>
                            <li>
                                <em>영화</em>
                                <p>
                                    동갑내기 과외하기(2003) 그녀를 모르면 간첩(2004) 슈퍼스타 감사용(2004)
                                    S다이어리(2004) 잠복근무(2005) 용이 간다(2007) 김종욱 찾기(2010)
                                    도가니(2011) 용의자(2013) 남과 여(2016) 부산행(2016) 밀정(2016)
                                    82년생 김지영(2019) 서복(2019)
                                </p>
                            </li>
                            <li>
                                <em>영화</em>
                                <p>
                                    동갑내기 과외하기(2003) 그녀를 모르면 간첩(2004) 슈퍼스타 감사용(2004)
                                    S다이어리(2004) 잠복근무(2005) 용이 간다(2007) 김종욱 찾기(2010)
                                    도가니(2011) 용의자(2013) 남과 여(2016) 부산행(2016) 밀정(2016)
                                    82년생 김지영(2019) 서복(2019)
                                </p>
                            </li>
                        </ul>
                    </Profile>
                </Container>
            </div>
        );
    }
}

export default Test7;

const Container = styled.div`
    width:95%;
    margin:30px auto;
    display:flex;
`
const Image = styled.article`
    width:50%;
    img {
        width:100%;
        transition:.4s;
        &:hover {
            opacity:0.7;
        }
    }
`
const Profile = styled.article`
    width:50%;
    padding:30px;
    background:#fff;
    h2 {
        font-size:40px;
        margin:0;
        margin-bottom:30px ;
    }
    strong {
        font-size:18px;
        display:block;
        padding-bottom:15px;
        border-bottom:1px solid #dcdcdc;
        margin-botoom:30px
    }
    ul {
        li {
            margin-bottom:20px;
            display:flex;
            em {
                display:inline-block;
                width:120px;
            }
            p {
                display:inline-block;
                width:520px
            }
        }
    }
    h3 {
        font-size:18px;
        display:block;
        padding-bottom:15px;
        border-bottom:1px solid #dcdcdc;
        margin-botoom:30px
    }

`