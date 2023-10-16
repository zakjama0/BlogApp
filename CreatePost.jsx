import React, { useEffect, useState } from 'react'
// Just adds a document to the post table
import {addDoc, collection} from "firebase/firestore"
import { db, auth } from './firebase-config'
import { useNavigate } from 'react-router-dom'

function CreatePost({isAuth}) {

  // Keeping track of the title
const [title, setTitle] = useState("")
const [postText, setPostText] = useState("")



// Adding the specfic database of posts
const postCollectionRef = collection(db , "posts")
let navigate = useNavigate();
// Submitting the data into firebase, storing it in the data base
const createPost = async () => {
  await addDoc(postCollectionRef, {title, postText, author:{name: auth.currentUser.displayName, id: auth.currentUser.uid},
  });
  navigate("/");

}

useEffect(() => {
  if(!isAuth){
    navigate("/login")
  }
}, []);

  return (
    <div className='crearePostPage'>
      
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          {/* The onChange allows there to be  */}
          <input placeholder='Title..' onChange={(e) => {setTitle(e.target.value);}} />
        </div>
        <div className='inputGp'>
        <label>Post:</label>
          <input placeholder='Post..' onChange={(e) => {setPostText(e.target.value);}}/>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
      
      
      </div>
  )
}

export default CreatePost