import React from 'react'
import { Link } from "react-router-dom";

import Search from './Search';
import stl from '../../styles/IsAuth.module.css'

const API_URL = process.env.REACT_APP_HOST;

const IsAuth = (props) => {
   const { searchAPI, getAllPosts,
      getAllUsers, getUserByID,
      getPostByUserID, logout,
      user } = props;


   return (
      <>
         <Search searchAPI={searchAPI} />

         <div className={stl.links}>
            <Link to="/posts" onClick={() => { getAllPosts() }} >posts</Link>
            <Link to="/users" onClick={() => { getAllUsers() }} >users</Link>
         </div>

         <div className={stl.myIcon}>
            <Link to="/user" id={stl.linkForAvatar} onClick={() => {
               getUserByID(user.id)
               getPostByUserID(user.id)
            }}>
               <img src={`${API_URL}/avatar/${user.avatar}`}
                  alt="avatar" className={stl.myAvatar} />
            </Link>

            <div className={stl.dropDown}>
               <Link to='/setting'>setting</Link>
               <Link to='/' onClick={() => {
                  logout()
               }}>logout</Link>
            </div>

         </div>
      </>
   )
}
export default IsAuth
