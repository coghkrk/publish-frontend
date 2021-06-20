import React, { Component } from 'react';
import styled, {css} from 'styled-components'

class Test9 extends Component {
    render() {
        return (
            <div>
                <Container bg>
                    <Box width="300px">button</Box>
                    <Box>button</Box>
                    <Box width="200px">button</Box>
                    <Box margin padding>button</Box>
                </Container>
                <Container>
                    <Box>button</Box>
                    <Box color="true">button</Box>
                    <Box color="true">button</Box>
                </Container>
            </div>
        );
    }
}

export default Test9;

const Container = styled.div`
    width:500px;
    height:300px;
    margin:20px;
    background: ${ props => props.bg && "skyblue"};
    background: ${ props => props.bg || "pink"};
`
const Box = styled.p`
    width:100%;
    background:yellow;
    width:${props => props.width};
    padding: ${props => props.padding && '20px'};
    margin: ${props => props.margin && '30px'};

    ${
        props => props.color && css`
            transition: .5s;
            background:red;
            cursor:pointer;
            width:400px;
            height:20px;
            &:hover {
                width:800px;
                height:40px;
                background:green;
            }
        `
    }
`