import React,{useEffect} from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import {useSelector,useDispatch} from 'react-redux';
import {selectUser} from './features/userSlice';
import Login from './Login/Login';
import {login,logout} from './features/userSlice';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Widgets from './widgets/Widgets';


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  useEffect(()=>{
        const auth=getAuth();
        onAuthStateChanged(auth,(userAuth)=>{
          console.log(userAuth)
          if(userAuth){
            dispatch(login({
                        email:userAuth.email,
                        uid:userAuth.uid,
                        displayName:userAuth.displayName,
                        photoUrl:userAuth.photoURL}))
          }else {
            dispatch(logout())
          }
        })
  },[dispatch])

  return (
    <div className="app">
      {/* header */}
      <Header />
      {!user ? <Login /> :(
      <div className="app__body">
        <Sidebar />
        <Main />
        <Widgets />
      </div>
      )}


      {/* widgets */}
        
    </div>
  );
}

export default App;
