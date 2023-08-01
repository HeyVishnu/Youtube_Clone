import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoVideoUrl,demoVideoTitle,demoChannelTitle,demoChannelUrl } from '../utils/contants'
const VideoCard = ({video}) => {

    const {id, snippet} = video;
    

  return (
    <Card sx={{ width: { xs: '100vw', sm: '300px', md: "300px", }, boxShadow: "none", borderRadius: 0 }}>
        <Link to={id.videoId ? `/video/${id.videoId}` :demoVideoUrl}>
            <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt = {snippet?.tittle}
            sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
            />
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>

           <Link to={id.videoId ? `/video/${id.videoId}` :demoVideoUrl}>
           <Typography variant="subtitle2" fontWeight='bold' color='white'>{snippet?.title || demoVideoTitle.slice(0,60)}</Typography>
           </Link>

           <Link to={snippet.channelId ? `/channel/${snippet?.channelId}` :demoChannelUrl}>
           <Typography variant="subtitle2" fontWeight='bold' color='gray' marginTop={1}>
            {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
           
           </Typography>
           </Link>
           

        </CardContent>
    </Card>
  )
}

export default VideoCard