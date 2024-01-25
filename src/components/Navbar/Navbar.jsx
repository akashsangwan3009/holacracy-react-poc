import React from 'react'
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../redux/actions/index.js"
import { Link } from 'react-router-dom';
import { buyCake } from '../../redux/actions/buyCake.js';

const Navbar = () => {
  const dispatch = useDispatch()
  const cakes = useSelector((state) => state.buyCake)
  const { loginAction, logoutAction } = bindActionCreators(actionCreators, dispatch)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <button className={styles.btn} onClick={() => { loginAction(true) }}>Login</button>
          <button className={styles.btn} onClick={() => { logoutAction(false) }}>Logout</button>
        </div>
        <Link to="/dashboard">
          <button className={styles.btn}>Navigate to dashboard</button>
        </Link >

        <Link to="/login">
          <button className={styles.btn}>Navigate to login</button>
        </Link >

      </div>
      <button className={styles.btn} onClick={() => { dispatch(buyCake()) }}>Buy Cake</button>
      <div className={styles.numberContainer}>{cakes.numOfCake}</div>
    </>


  )
}

export default Navbar