import React,{useState} from 'react';


const Posts = (props) => {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [categories, setCategories] = useState("");

 return (
      <>
         <h1>Posts Page</h1>
         <div>
            <h2>Add post</h2>
            <input type='text' placeholder="title" name="title"  required={true} autoFocus
            onChange={e => setTitle(e.target.value)}/>
            <br/>

            <input type='text' placeholder="content" name="content" required={true} 
            onChange={e=> setContent(e.target.value)}/>
            <br/>

            <input type='text' placeholder="categories" name="categories"
               onChange={e=> setCategories(e.target.value)}/>
            <br/>
            
            <button onClick={()=>{
                props.addPost(title,content,categories)
            }}>add</button>
         </div>
      </>
   )
// }
// return(
//    <>
//    <h1>None posts</h1>
//    </>
// )
}
export default Posts;