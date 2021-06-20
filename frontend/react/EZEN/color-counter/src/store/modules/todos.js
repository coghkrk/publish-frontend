//1. change - 상태변수 - input
//2. 입력   - 네이터 배열 객체 [{id:1 ,text:'할일'}]
//3. 

//action 생성
const INSERT = 'todos/INSERT' //데이터 추가
const REMOVE = 'todos/REMOVE' //목록 삭제
const TOGGLE = 'todos/TOGGLE' //class toggle
const CHANGE_INPUT = 'todos/CHANGE_INPUT' //input 값처리 

//action 함수 내보내기 
let no = 2
export const insert = (text) => ({type:INSERT, list:{id:no++,text}})
export const remove = (id) => ({type:REMOVE,id})
export const toggle = (id) => ({type:TOGGLE,id})
export const changeInput = (text) => ({type:CHANGE_INPUT,text})

//reducer 순수함수
const initalState = {
    input:'',
    data: [
        {id:1, text:'todo1'},
    ]
}
const reducer = ( state = initalState, action ) => {
    switch(action.type) {
        case INSERT:
            return {
                ...state,
                data : state.data.concat(action.list)
            }
        case REMOVE:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.id)
            }
        case TOGGLE:
            return {
                ...state,
            }
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.text
            }
        default:
            return state
    }
}

export default reducer