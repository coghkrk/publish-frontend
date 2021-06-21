import { decrement } from "./counter"

//액션생성
const RED = 'color/RED'
const GREEN = 'color/GREEN'
const BLUE = 'color/BLUE'

//액션함수 
export const red = () => ({type:RED})
export const green = () => ({type:GREEN})
export const blue = () => ({type:BLUE})

//리듀서 순수함수 
const initalState = { color : 'pink'}
const reducer = (state=initalState , action) => {
    switch( action.type ){
        case RED:
            return {
                ...state ,
                color:'red'
            }
        case GREEN:
            return {
                ...state ,
                color:'green'
            } 
        case BLUE:
            return {
                ...state,
                color:'blue'
            }       
        default:
            return state 
    }
}
export default reducer 