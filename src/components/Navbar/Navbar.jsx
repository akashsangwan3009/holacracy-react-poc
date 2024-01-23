import React from 'react'
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from "../../redux/actions/index.js"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const dispatch=useDispatch()
    const cakes = useSelector((state) => state.buyCake)
    const{loginAction, logoutAction,buyCake} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>
        <button className={styles.btn} onClick={()=>{loginAction(true)}}>Login</button>
        <button className={styles.btn} onClick={()=>{logoutAction(false)}}>Logout</button>
        <button className={styles.btn} onClick={()=>{buyCake()}}>Buy Cake</button>

        <Link to="/dashboard">
          <button>Navigate to dashboard</button>
        </Link >

        <Link to="/login">
          <button>Navigate to login</button>
        </Link >

        <div>{cakes.numOfCake}</div>
    </div>
  )
}

export default Navbar