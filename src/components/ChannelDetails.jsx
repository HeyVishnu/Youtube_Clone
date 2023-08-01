import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box} from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { FetchFromApi } from '../utils/FetchFromApi'


const ChannelDetails = () => {
 const {id} =  useParams();

 const [channel, setchannel] = useState(null);
 const [video,setvideo] = useState([]);

 useEffect(() => {
   FetchFromApi(`channels?part=snippet&id=${id}`)
   .then((data)=>{setchannel(data.items[0])});

  FetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`)
  .then((data)=>{setvideo(data.items)});
 }, [id])
 
  return (
    <Box minHeight="95vh" minWidth='100vw'> 
    <Box style={{height: '300px' ,
    zIndex: 10,
    background: `linear-gradient(90deg, hsla(351, 100%, 25%, 1) 0%, hsla(9, 59%, 7%, 1) 100%)`}}/> 
    <ChannelCard channelDetail={channel}  marginTop={'-120px'}/>

    <Box display='flex'>
      <Box sx={{mr: {sm: '100px'}}}/>
        <Videos videos={video}></Videos>
    </Box>
      
    </Box>
  )
}

export default ChannelDetails