import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/IsAuth.css'


const NotAuth = () => {
      return (
         <>
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
         </>
      )
   }
export default NotAuth
