import React from "react";
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import {signOut} from 'firebase/auth';
import { auth } from "../firebase";
function Header () {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutToApp = () =>{
        signOut(auth)
        .then(()=>{
            dispatch(logout());
        })
        .catch((error)=>{
            alert(error)
        })

    } 

    return(
    <div className="header"> 
        <div className="header__left">
            <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1644839092~hmac=bdc4d66a993e8597cb99594b6b8f0886" alt=""/>
            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder="Search..."/>
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon ={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon ={BusinessCenterIcon} title='My Jobs' />
            <HeaderOption Icon ={ChatIcon} title='Messaging' />
            <HeaderOption Icon ={NotificationsIcon} title='Notifications' />
            {user ? (<HeaderOption onClick={logoutToApp} title={user?.displayName} profile={true} avatar={user?.photoUrl} />):null}
            

        </div>
    </div>)
}
export default Header;