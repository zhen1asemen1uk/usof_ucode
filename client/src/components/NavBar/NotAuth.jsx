import React from 'react'
import { Link } from "react-router-dom";

import stl from '../../styles/NoneAuth.module.css'

const NotAuth = () => {
      return (
         <>
            <Link to="/register"  className={stl.noneLink}>register</Link>
            <Link to="/login"  className={stl.noneLink}>login</Link>
         </>
      )
   }
export default NotAuth
