import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./loginPage.module.css"
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/actions';

const LoginPage = () => {

  const distpatch=useDispatch();
  const navigate=useNavigate();
  const {logoutAction}=bindActionCreators(actionCreators, distpatch)

  const logoutClick=()=>{
    logoutAction(false);
    navigate("/");
  }

  return (
    <div>
      loginPage
      <Link to="/">
          <button className={styles.btn}>Navigate to Home</button>
      </Link >

      <button onClick={logoutClick}>
        Logout
      </button>
    </div>
  )
}

export default LoginPage