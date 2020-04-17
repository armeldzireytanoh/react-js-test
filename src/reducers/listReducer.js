import { GET_LIST } from '../actions';                           

const initialState = { list: [] }
export default function listReducer(state = initialState, action) {  
  switch (action.type) {
    case GET_LIST:                                               
      return action.list;
    default:                                                             
      return state;
  }
}