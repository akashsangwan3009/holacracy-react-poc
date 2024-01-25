import { BUY_CAKE } from "../../utils/constant";

const initialState = {
    numOfCake: 0
};

const buyCakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
           numOfCake:state.numOfCake+1
        }
        default :return state
    }
}

export default buyCakeReducer;
