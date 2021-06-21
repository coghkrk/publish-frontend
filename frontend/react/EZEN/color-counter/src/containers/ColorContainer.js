import React from 'react';
import { connect } from 'react-redux';
import Color from '../components/Color';
import { blue, green, red } from '../store/modules/color';
const ColorContainer = ({color, red, green, blue}) => {
    return (
        <div>
            <Color color={color}  red = { red}    blue={blue}   green= {green}    />
        </div>
    );
};

// const mapDispatchToProps = (dispatch) => ({
//     red : () => dispatch( red()  ),
//     green : () => dispatch( green() ) ,
//     blue : () => dispatch( blue() )
// })
export default connect(
    (state) => ({
        color : state.color.color 
    }) ,
    {red,green,blue}
)(ColorContainer);