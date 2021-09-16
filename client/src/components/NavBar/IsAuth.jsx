import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authAPI } from "../../API/authAPI";
import { postAPI } from '../../API/postAPI';
import { userAPI } from '../../API/userAPI';
import { API_URL } from '../../config';

import stl from '../../styles/IsAuth.module.css'

const IsAuth = (props) => {
   const dispatch = useDispatch();

   const { user } = props;

   return (
      <>
         <Link to="/posts" >posts</Link>
         <Link to="/users" >users</Link>
         <div className={stl.myIcon}>
            <Link to="/user" id={stl.linkForAvatar} onClick={() => {
               dispatch(userAPI.getUserByID(user.id))
               dispatch(postAPI.getPostByUserID(user.id))
            }}>

               <img src={`${API_URL}/avatar/${props.user.avatar}`}
                  alt="avatar" className={stl.myAvatar} />

            </Link>
            <div className={stl.dropDown}>
               <Link to='/setting'>setting</Link>
               <Link to='/' onClick={() => {
                  dispatch(authAPI.logout())
               }}>logout</Link>
            </div>
         </div>
      </>
   )
}
export default IsAuth
