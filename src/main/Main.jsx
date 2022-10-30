import React, { useState,useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import './main.css'
import Post from './Posts/Post'
import InputOption from './post input options/InputOption';
import { db } from '../firebase';
import {collection,onSnapshot,addDoc,serverTimestamp, orderBy, query} from 'firebase/firestore'
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice';
import FlipMove from 'react-flip-move'


function Main() {
    const [input,setInput] = useState('');
    const [posts,setPosts] = useState([]);
    const user = useSelector(selectUser);
    console.log(user)

    const onChangeInput = e => {
        setInput(e.target.value);
    }

    useEffect(()=>{
        const q = query(collection(db,"posts"),orderBy('timestamp',"desc"))
        onSnapshot(q,(snapshot)=>(
            setPosts(snapshot.docs.map(doc=>
            ({id:doc.id,data:doc.data()})
            )
            )
        )) 
    },[])

    const submitPost = async(event) =>{
        event.preventDefault();
        const collectionDoc = collection(db,'posts');
        const payload = {name:user.displayName,description:'hello',message:input,photoUrl:user.photoUrl,timestamp:serverTimestamp()}
        const postId =  await addDoc(collectionDoc,payload)
        console.log(postId)
        setInput('');

 
    }

  return (
    <div className="main">
        <div className="main__inputContainer">
            <div className="main__input">
                <CreateIcon />
                <form onSubmit={submitPost}>
                    <input value={input} onChange={onChangeInput} type="text" />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="main__inputOptions">
                {/* inputOptions */}
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <InputOption Icon={YouTubeIcon} title="Video" color="#7fc15e" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#e7a33e" />
                <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#fc9295" />

            </div>
        </div>
        {/* Posts */}
        <FlipMove>
        {posts.map(post=>
                <Post key={post.id} name={post.data.name} description={post.data.description} message={post.data.message} photoUrl={post.data.photoUrl}/>

            )}
        </FlipMove>

    </div>
  )
}

export default Main;