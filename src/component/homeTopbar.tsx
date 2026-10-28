"use client";


import { Box, Link, ListItem, ListItemButton, ListItemText } from "@mui/material";




export default function HomeTopBar() {   


    return (
      <Box sx={{position: 'fixed',top: 0, left: 0,width: "100vw", height: '75px', bgcolor: '#2E6FA0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: {lg: "start",md: "center", sm: "center",xs: "center"},flexWrap: "wrap"}}>
        <Box sx={{top: 0, left: 0, bgcolor: '#2E6FA0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: "space-between",flexWrap: "wrap"}}>      
          <Box sx={{padding: 1,borderRadius: '5px',fontSize: {lg: "25px",md: "20px", sm: "20px",xs: "20px"}}}><a style={{scrollBehavior: 'smooth',color: '#fff', textDecoration: "none"}} href="#targetOne-div">Home</a></Box>
          <Box sx={{padding: 1,borderRadius: '5px',fontSize: {lg: "25px",md: "20px", sm: "20px",xs: "20px"}}}><a style={{scrollBehavior: 'smooth',color: '#fff', textDecoration: 'none'}} href="#targetThree-div">Projects</a></Box>
          <Box sx={{padding: 1,borderRadius: '5px',fontSize: {lg: "25px",md: "20px", sm: "20px",xs: "20px"}}}><a style={{scrollBehavior: 'smooth',color: '#fff', textDecoration: 'none'}} href="#targetTwo-div">Contact us</a></Box>
        </Box>
      </Box>
    )
 }