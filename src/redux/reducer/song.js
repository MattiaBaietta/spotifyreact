import { PICK_SONG } from "../action";

const initialState = {
    song:[],
}

const songReducer = (state=initialState,action)=>{
    switch(action.type){
        case PICK_SONG:
            return{
                
                song:[action.payload],
            }
            default:
            return state
    }
    
}
export default songReducer