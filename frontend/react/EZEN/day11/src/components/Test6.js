import React, { Component } from 'react';
import styled from 'styled-components';

class Test6 extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Box1>hellow</Box1>
                    <Box2>hi</Box2>
                    <Button>
                        <span>button</span>
                    </Button>
                </Container>
            </div>
        );
    }
}

export default Test6;

//const 이름 = styled.태그명`속성:값;`
const Container = styled.div`
    width:600px;
    height:400px;
    margin:0 auto;
    border:1px solid #000;
`
const Box1 = styled.article`
    width:250px;
    height:200px;
    background:yellow;
    fonst-size:20px;
    line-height:10px;
    text-aligh:center;
`
const Box2 = styled.section`
    width:100px;
    height:100px;
    background:red;
`
const Button = styled.button``