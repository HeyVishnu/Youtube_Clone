import { useState,useEffect} from 'react'
import { Stack,Box,Typography } from '@mui/material'
import SideBar from './SideBar'
import { FetchFromApi } from '../utils/FetchFromApi'
import Videos from './Videos'





const Feed = () => {
  const [selectedCategory ,setSelectedCategory] = useState('New');
  const [videos, setvideos] = useState([])


  // Fetch Opperation whenever we change the sidebar button we are requesting the video of tha category from the api 
  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setvideos(data.items));
  }, [selectedCategory]);
  

  return (
    <Stack sx={{flexDirection: {sm: "column", md: "row"}}}>

      {/* left side Bar */}

      <Box sx = {{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx:0,md:2}}}>
        
        <SideBar selectedCategory ={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2023 Youtube
        </Typography>

      </Box>

      {/* Right side box which contains Videos */}

      <Box p = {2} sx={{overflowY:'auto',height: '90vh', flex:2}}>
        <Typography  variant='h4' fontWeight='bold' sx={{color: 'white', marginBottom: 4}}>
          {selectedCategory} <span style={{color: '#F31503'}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
      
      

    </Stack>
  )
}

export default Feed