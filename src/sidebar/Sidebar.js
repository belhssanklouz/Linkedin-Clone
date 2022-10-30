import { Avatar } from '@mui/material'
import React from 'react'
import './sidebar.css'
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice';
function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                #
            </span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='' />
            <Avatar className='sidebar__avatar' src={user?.photoUrl}>{user?.displayName[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>who viewed you</p>
                <p className='sidebar__statNumber'>2,500</p>
            </div>
            <div className="sidebar__stat">
                <p>views on post</p>
                <p className='sidebar__statNumber'>2,458</p>
            </div>
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("React.JS")}
            {recentItem("C++")}
            {recentItem("C#")}
            {recentItem("Node.JS")}
            {recentItem("MongoDB")}

        </div>
    </div>
  )
}

export default Sidebar