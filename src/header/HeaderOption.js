import { Avatar } from '@mui/material'
import React from 'react'
import './headeroption.css'
const HeaderOption = ({profile,avatar,title,Icon, onClick}) => {
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption__icon' />}
        {profile && <Avatar className="headerOption__icon" src={avatar}>{title[0]}</Avatar>}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption