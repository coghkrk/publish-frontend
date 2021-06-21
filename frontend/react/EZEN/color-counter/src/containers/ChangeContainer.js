import React from 'react';
import {connect} from 'react-redux'
import ChangeColor from '../components/ChangeColor';
import { changeColor } from '../store/modules/changecolor';

const ChangeContainer = ({color, changeColor}) => {
    return (
        <div>
            <ChangeColor 
                color={color}
                changeColor = {changeColor}
            />
        </div>
    );
};

// const mapDispatchToProps = (dispatch) => ({
//     changeColor: (color) => dispatch(changeColor(color)),
// })
//매개값 입력 안해도 매개값도 알아서 전달해줌 

// export default connect(
//     (state) => ({
//         color: state.changecolor.color
//     }),
//     {changeColor}
// )(ChangeContainer);

//비구조할당 가능
export default connect(
    ({changecolor}) => ({
        color: changecolor.color
    }),
    {changeColor}
)(ChangeContainer);