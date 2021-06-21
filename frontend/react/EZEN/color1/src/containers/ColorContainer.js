import React from 'react';
import { connect } from 'react-redux';
import Color from '../components/Color';
import { blue, green ,pink, red, yellow } from '../store/modules/color';

const ColorContainer = ({color , red, green, blue, yellow, pink}) => {
    return (
        <div>
            <Color
                color={color}
                red={red}
                green={green}
                blue={blue}
                yellow={yellow}
                pink={pink}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    //값
    // 이름 ( 마음대로 ) : state.파일명.변수
    color : state.color.color
})
const mapDispatchToProps = (dispatch) => ({
    //액션함수
    red : () => dispatch( red()),
    green : () => dispatch( green()),
    blue : () => dispatch( blue()),
    yellow : () => dispatch( yellow()),
    pink : () => dispatch( pink())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) 
(ColorContainer);