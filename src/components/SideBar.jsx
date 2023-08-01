import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/contants'

const SideBar = ({selectedCategory, setSelectedCategory}) => {
  
  return (
    <Stack
    direction="row"
    sx={{overflowY: "auto", height: {sx: "auto", md:' 95%'}, flexDirection: {md:'column'}}}
    >

        {categories.map((categories)=>{
            return(
                <button className='category-btn'
                onClick={()=>setSelectedCategory(categories.name)}
                style={{background: categories.name === selectedCategory && '#FC1503',color: 'white'}}
                key={categories.name}
                >
                <span style={{marginRight: 6,color: categories.name === selectedCategory? 'white': 'red'}}>{categories.icon}</span>
                <span>{categories.name}</span>
            </button>
            )
            
        })}

    </Stack>
  )
}

export default SideBar