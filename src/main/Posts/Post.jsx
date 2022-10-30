import React,{forwardRef} from 'react'
import {Avatar} from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import './post.css'
import InputOption from '../post input options/InputOption'

const Post = forwardRef((props,ref) => {
  const {name,description,message,photoUrl} = props;
  return (
    <div ref={ref} className='post'> 
      <div className='post__header'> 
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className='post__buttons'>
        <InputOption title="Like" Icon={ThumbUpIcon} color="gray" />
        <InputOption title="Comment" Icon={CommentRoundedIcon} />
        <InputOption title="Share" Icon={ShareIcon} />
        <InputOption title="Send" Icon={SendIcon} />


      </div>
    </div>
  )
})

export default Post