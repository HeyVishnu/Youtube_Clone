import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/contants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack 
    direction='row'
    alignItems='center'
    p={2}
    sx={{position: "sticky", backgroundColor: 'black', justifyContent:'space-between', top:0}}
    >

        <Link to='/' style={{display: 'flex',alignItems: "center"}}>
            <img src={logo} alt="Logo" height="45px"/> 
            <span style={{color: "white", paddingLeft: 5, fontFamily: 'Roboto', fontWeight: 600}}>Youtube</span>
        </Link>

        <SearchBar/>

    </Stack>
  )
}

export default Navbar 