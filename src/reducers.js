const initialMode = {
    mode:'disable'
};

const rootReducer = (state = initialMode, action)=>{
    switch(action.type){
        case 'ENABLE':
            return {mode : 'enable'};
        case 'DISABLE':
            return {mode: 'disable'};
        default:
            return  state;
        
    }
}

export default rootReducer;