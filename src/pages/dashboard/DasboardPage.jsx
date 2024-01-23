import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Dashboard.module.css"
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../redux/actions'

const DashboardPage = () => {
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {logoutAction}=bindActionCreators(actionCreators, dispatch)

  const logoutClick=()=>{
    logoutAction(false);
    navigate("/");
  }

  return (
    <div>
      dashboard
      <Link to="/">
          <button className={styles.btn}>Navigate to Home</button>
      </Link >

      <button onClick={logoutClick}>
        Logout
      </button>

      
    </div>
  )
}

export default DashboardPage