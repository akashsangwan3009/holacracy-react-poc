import { BUY_CAKE } from "../../utils/constant";

const initialState = {
    numOfCake: 10
};

const buyCakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
           numOfCake:state.numOfCake?state.numOfCake-1:0
        }
        default :return state
    }
}

export default buyCakeReducer;
