import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const submitHandler = (e)=>{
   if(searchTerm){
    e.preventDefault();
    navigate(`search/${searchTerm}`);
    setSearchTerm('');
   }
  }
  return (
    <Paper
    component="form"
    onSubmit={submitHandler}
    sx={{borderRadius: 20,border: '1px solid #e3e3e3', paddingLeft:2, boxShadow:'none', marginRight:{sm: 5}}}
    >
        <input className="seaarch-bar" placeholder='Search...'onChange={(e)=>{setSearchTerm(e.target.value)}} value={searchTerm} style={{outline:'none', border:"none"}} />
            <IconButton type="submit" sx={{p:'10px',color: 'red'}}>
                <Search/>
            </IconButton>
    </Paper>
  )
}

export default SearchBar