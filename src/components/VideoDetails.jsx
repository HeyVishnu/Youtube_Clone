import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { FetchFromApi } from "../utils/FetchFromApi";
import Videos from "./Videos";

const VideoDetails = () => {
  const {id} = useParams();
  const [videoDetails, setvideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    FetchFromApi(`videos?part=snippet&id=${id}`)
    .then((data)=>setvideoDetails(data.items[0]))


    FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))

  }, [id]);


  if(!videoDetails?.snippet) return `Loading...`;



  const {snippet: {title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails

  return (
    <Box minHeight={'92vh'}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>

            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />

            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>


            <Stack>
              <Link to={`channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff">{channelTitle}</Typography>
                <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }}/>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>{parseInt(viewCount).toLocaleString()} views</Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>{parseInt(likeCount).toLocaleString()} likes</Typography>
              </Stack>
            </Stack>

          </Box>

        </Box>
        <Box px={2} py={{ xs: 5, md: 1}} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column"/>
        </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetails