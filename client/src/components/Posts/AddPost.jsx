import React, { useState } from 'react'

const AddPost = (props) => {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [categories, setCategories] = useState("");

   const { addPost } = props;

   return (
      <div>
         <div className='addPost'>
            <input type='text' placeholder="title"
               name="title" required={true} id='title'
               onChange={e => setTitle(e.target.value)} />
            <br />
            <input type='text' placeholder="content"
               name="content" required={true} id='content'
               onChange={e => setContent(e.target.value)} />
            <br />
            <input type='text' placeholder="categories"
               name="categories" required={true} id='categories'
               onChange={e => setCategories(e.target.value)} />
            <br />

            <button className='btn' onClick={() => {
               addPost(title, content, categories);
            }}>add</button>
         </div>
      </div>
   )

}
export default AddPost