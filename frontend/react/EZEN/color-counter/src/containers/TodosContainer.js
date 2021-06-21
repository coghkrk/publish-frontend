import React from 'react';
import Todos from '../components/Todos/Todos';
import {connect} from 'react-redux';
import { changeInput, insert ,remove, toggle } from '../store/modules/todos';

const TodosContainer = ({input, data, insert ,remove, toggle, changeInput}) => {
    return (
        <div>
            <Todos
                input={input}
                data={data}
                insert={insert}
                remove={remove}
                toggle={toggle}
                changeInput={changeInput}
            />
        </div>
    );
};

//initalState안의 값이 들어와야 함 
// const mapDispatchToProps = (dispatch) => ({
//     insert : (text) => dispatch(insert(text)),
//     remove : (id) => dispatch(remove(id)),
//     toggle : (id) => dispatch(toggle(id)),
//     changeInput : (text) => dispatch(changeInput(text))

// })

export default connect(
    ({todos}) => ({
        input:todos.input,
        data:todos.data
    }),
    {insert,remove,toggle,changeInput}
)(TodosContainer);