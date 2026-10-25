"use client";


import { Box, Link, ListItem, ListItemButton, ListItemText } from "@mui/material";




export default function HomeTopBar() {   


    return (
    
        <Box sx={{position: 'fixed',top: 0, left: 0,width: "100vw", height: '75px', bgcolor: '#2E6FA0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: "end",flexWrap: "wrap"}}>      
          <Box sx={{mx: 2,ml: 4,padding: 1,borderRadius: '5px'}}><a style={{scrollBehavior: 'smooth',color: '#fff', textDecoration: 'none',fontSize: "25px"}} href="#targetOne-div">Home</a></Box>
          <Box sx={{mx: 2,ml: 4,padding: 1,borderRadius: '5px'}}><a style={{scrollBehavior: 'smooth',color: '#fff', textDecoration: 'none',fontSize: "25px"}} href="#targetThree-div">Projects</a></Box>
          <Box sx={{mx: 2,ml: 4,mr: 4,padding: 1,borderRadius: '5px'}}><a style={{scrollBehavior: 'smooth',color: '#fff', textDecoration: 'none',fontSize: "25px"}} href="#targetTwo-div">Contact us</a></Box>
        </Box>
    )
 }