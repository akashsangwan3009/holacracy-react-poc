import React from "react";
import {  connect } from "react-redux";

const App = (props)=>{
    return(
        <div style={{ textAlign: "center" }}>
            <h1> Welcome to react application</h1>
            <p><h2>Current mode:{props.mode}</h2></p>
            <button onClick={props.enable}>Enable</button>
            <button onClick={props.disable}>Disable</button>
            
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        mode: state.mode,
    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        enable:() =>dispatch({type:'ENABLE'}),
        disable:()=>dispatch({type:'DISABLE'}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)