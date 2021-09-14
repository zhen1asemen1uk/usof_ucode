import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authAPI } from "../../API/authAPI";
import { API_URL } from '../../config';
import '../../styles/IsAuth.css'

const IsAuth = (props) => {
   const dispatch = useDispatch();

   return (
      <>
         <Link to="/posts">posts</Link>
         <Link to="/user">users</Link>
         <div className='myIcon'>
            <img src={`${API_URL}/avatar/${props.user.avatar}`} alt="avatar" className='myAvatar' />
               <Link className='logout' to='/' onClick={() => { dispatch(authAPI.logout()) }}>logout</Link>
         </div>
      </>
   )
}
export default IsAuth
