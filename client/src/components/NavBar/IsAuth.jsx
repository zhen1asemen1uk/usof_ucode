import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authAPI } from "../../API/authAPI";


const IsAuth = () => {
   const dispatch = useDispatch();

      return (
         <>
            <Link to="/posts">posts</Link>
            <Link to="/user">user</Link>
            <Link to='/' onClick={() => { dispatch(authAPI.logout()) }}>logout</Link>
         </>
      )
   }
export default IsAuth
