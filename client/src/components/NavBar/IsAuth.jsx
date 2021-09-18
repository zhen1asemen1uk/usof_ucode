import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { authAPI } from "../../API/authAPI";
import { postAPI } from '../../API/postAPI';
import { userAPI } from '../../API/userAPI';
import { API_URL } from '../../config';
import { search_Post } from '../../reducers/postReducer/postReducer';

import stl from '../../styles/IsAuth.module.css'

const IsAuth = (props) => {
   const dispatch = useDispatch();

   const [search, setSearch] = useState('');

   const { user } = props;

   return (
      <>
         <div className={stl.searchWrapper}>
            <input type="search" name="search" id={stl.search} className={stl.search}
               onChange={e => setSearch(e.target.value)} value={search} autoComplete='off'
               placeholder='Search posts by title/content' />
            <Link to='filterPosts' className={stl.searchBtn} onClick={() => {
               setSearch('');
               dispatch(search_Post(search));
            }}></Link>
         </div>
         <div className={stl.links}>
            <Link to="/posts" onClick={() => { dispatch(postAPI.getAllPosts()) }} >posts</Link>
            <Link to="/users" onClick={() => { dispatch(userAPI.getAllUsers()) }} >users</Link>
         </div>

         <div className={stl.myIcon}>
            <Link to="/user" id={stl.linkForAvatar} onClick={() => {
               dispatch(userAPI.getUserByID(user.id))
               dispatch(postAPI.getPostByUserID(user.id))
            }}>
               <img src={`${API_URL}/avatar/${user.avatar}`}
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
