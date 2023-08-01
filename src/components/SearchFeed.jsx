import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos';
import { FetchFromApi } from '../utils/FetchFromApi';
import { useState } from 'react';

const SearchFeed = () => {
  const {searchTerm} = useParams();
  console.log(searchTerm);
  const [videos, setvideos] = useState([]);
  
  useEffect(()=>{
    FetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setvideos(data.items));
  },[searchTerm])

  return (
    <Stack>
      <Box p = {2} sx={{overflowY:'auto',height: '90vh', flex:2}}>
        <Typography  variant='h4' fontWeight='bold' sx={{color: 'white', marginBottom: 4}}>
          Search result for: <span style={{color: '#F31503'}}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
      
    </Stack>

  )
}

export default SearchFeed