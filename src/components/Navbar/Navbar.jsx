import React from 'react'
import styles from "./Navbar.module.css";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from "../../redux/actions/index.js"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const dispath=useDispatch()
    const{loginAction, logoutAction} = bindActionCreators(actionCreators,dispath)
  return (
    <div>
        <button className={styles.btn} onClick={()=>{loginAction(true)}}>Login</button>
        <button className={styles.btn} onClick={()=>{logoutAction(false)}}>Logout</button>

        <Link to="/dashboard">
          <button>Navigate to dashboard</button>
        </Link >

        <Link to="/login">
          <button>Navigate to login</button>
        </Link >
    </div>
  )
}

export default Navbar