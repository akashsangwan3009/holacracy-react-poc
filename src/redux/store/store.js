import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice'
import authReducer from '../reducers/authReducers'
import buyCakeReducer from '../reducers/buyCakeReducer'

export const store=configureStore({
    reducer:{
    auth: authReducer,
    buyCake:buyCakeReducer,
    counterReducer:counterReducer
    }
})

// export type RootState=ReturnType<typeof store.getState>
// export type AppDispatch=typeof store.dispatch;