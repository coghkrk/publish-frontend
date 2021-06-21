import React, { Component } from 'react';
import './Reset.scss'
import './Test4.scss'

class Test4 extends Component {
    state = {
        data : [
            {no:1, title : '윤석열 "정치, 바뀌는 게 없구나…편하게 살 걸 참 부질없다"', date:'2020.10.22', link:'https://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0011963939&isYeonhapFlash=Y&rc=N'},
            {no:2, title : '윤석열 "정치, 바뀌는 게 없구나…편하게 살 걸 참 부질없다"', date:'2020.10.22', link:'https://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0011963939&isYeonhapFlash=Y&rc=N'},
            {no:3, title : '윤석열 "정치, 바뀌는 게 없구나…편하게 살 걸 참 부질없다"', date:'2020.10.22', link:'https://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0011963939&isYeonhapFlash=Y&rc=N'},
            {no:4, title : '윤석열 "정치, 바뀌는 게 없구나…편하게 살 걸 참 부질없다"', date:'2020.10.22', link:'https://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0011963939&isYeonhapFlash=Y&rc=N'},
            {no:5, title : '윤석열 "정치, 바뀌는 게 없구나…편하게 살 걸 참 부질없다"', date:'2020.10.22', link:'https://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0011963939&isYeonhapFlash=Y&rc=N'},
        ]
    }
    render() {
        const { data } = this.state
        return (
            <div className="Test4">
                <articl>
                    <h3>NOTICE</h3>
                        <ul>
                            {
                                data.map( news => <li key={news.no}>
                                    <a href={news.link}>{news.title}</a>
                                    <span>{news.date}</span>
                                </li>)
                            }
                        </ul>
                </articl>
                <p className="more">more +</p>
            </div>
        );
    }
}

export default Test4;