

"use server"

import { Box, Typography } from '@mui/material';
import HomeTopBar from './homeTopbar';
import CommentComponent from './comment';



export default async  function HomeComponent() {
  

  return (
    <>
    <HomeTopBar />
    <Box sx={{width: "100%", scrollBehavior: 'smooth',  bgcolor: '#49A4BB', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
          <Box sx={{display: 'flex',flexWrap: 'wrap',flexDirection: "row",alignItems: 'center',justifyContent: "center",mt: 10,scrollMarginTop: '75px'}} id="targetOne-div">
            <Box sx={{display: 'flex',flexDirection: 'column',flexWrap: 'wrap',color: 'white',ml: 5,mr: 5,padding: 2,borderRadius: '10px',border: "ThreeDShadow", justifyContent: 'center'}}>
                <Box sx={{ textAlign: 'center'}}>
                  <h1>Hello, I'm Kyaw Lin Aung.</h1>
                  <h2>I'm a Javascript developer.</h2>
                </Box>
                <Box sx={{ width: '220px', height: '350px',borderRadius: '10%', overflow: 'hidden', margin: '0 auto', mt: 2 }}>
                <img style={{ width: '100%', height: '100%',borderRadius: '10'}} src="/profile.jpeg" alt="Profile Image" />
               </Box>
            </Box>
            <Box sx={{display: 'flex',height: {xs: 'auto', sm: '600px'},maxWidth: "400px",flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center',justifyContent: "start",color: 'white',margin: 5,padding: 2,borderRadius: '10px',border: "ThreeDShadow"}}>
                
                <Typography sx={{mt: 6,lineHeight: 3.5}}>-        I'm a passionate JavaScript developer with 4+ years of learning experience in building modern web applications.</Typography>
                <Typography sx={{mt: 2,lineHeight: 3.5}}>-        Skilled in React, Node.js, Express.js and Next.js JavaScript frameworks.</Typography>
                <Typography sx={{mt: 2,lineHeight: 3.5}}>-        My goal is to continuously learn and contribute to innovative projects that make a positive impact.</Typography>
              </Box>
          </Box>
          <Box sx={{display: 'flex',flexWrap: 'wrap',mt: 5,flexDirection: "row",alignItems: 'center',justifyContent: 'center'}}>
                  
                    <Box sx={{display: 'flex',height: {lg: '550px',md: "550px",sm: "auto",xs: "auto"},minWidth: {lg: "350px",md: "350px",sm: "350px",xs: "300px"},maxWidth: {lg: "400px",md: "400px",sm: "400px",xs: "300px"},flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow",  }}>
                      <Box sx={{width: "100%",height: "auto",display: "flex",alignItems: "center",justifyContent: "center"}}>
                        <h1>Languages</h1>
                      </Box>
                      <Box sx={{width: "100%",height: "auto",wordWrap: "break-word",display: "flex",alignItems: "center",justifyContent: "center"}}>
                        <Box sx={{width: "100%", ml: "20px",borderRadius: "10px",padding: 1}}>
                        <h3>HTML</h3>
                        <h3 style={{marginTop: "10px"}}>CSS</h3>
                        <h3 style={{marginTop: "10px"}}>JavaScript</h3>
                        <p>Syntax,Operators,ifconditions,loops,Arrays, Objects</p>
                        <p>DOM Manipulation,Event Handling,</p>
                        <p>Functions,ES6 Features,Promises,Async/Await</p>
                        <p>JSON,Fetch API,Local Storage,Session Storage</p>
                        <p>Regular Expressions,Error Handling,Modules</p>
                        <h3 style={{marginTop: "10px"}}>TypeScript</h3>
                        <p>Static Types,Early Error Catching</p>
                        </Box>
                      </Box>
                    </Box>
      
                    <Box sx={{display: 'flex',height: {lg: '550px',md: "550px",sm: "auto",xs: "auto"},minWidth: {lg: "350px",md: "350px",sm: "350px",xs: "300px"},maxWidth: {lg: "400px",md: "400px",sm: "400px",xs: "300px"},flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow",  }}>
                      <Box sx={{width: "100%",display: "flex",alignItems: "center",justifyContent: "center"}}>
                        <h1>Frameworks</h1>
                      </Box>
                      <Box>
                        <Box sx={{ml:"20px"}}>
                        <h3>React</h3>
                        <p>Jsx,useState,useEffect</p>
                        <h3 style={{marginTop: "10px"}}>Node.js</h3>
                        <p>File system(fs)</p>
                        <p>HTTP Module</p>
                        <p>CRUD methods</p>
                        <h3 style={{marginTop: "10px"}}>Express.js</h3>
                        <p>Routing with Express</p>
                        <h3 style={{marginTop: "10px"}}>Next.js</h3>
                        <p>Server-side,Client-side Rendering,API Routes</p>
                        <p>File system based routing.Page Router.App Router.</p>
                        <p></p>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{display: 'flex',height: {lg: '550px',md: "550px",sm: "auto",xs: "auto"},minWidth: {lg: "350px",md: "350px",sm: "350px",xs: "300px"},maxWidth: {lg: "400px",md: "400px",sm: "400px",xs: "300px"},flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow",  }}>
                      <Box sx={{width: "100%",display: "flex",alignItems: "center",justifyContent: "center"}} >
                        <h1>Others</h1>
                      </Box>
                      <Box>
                        <Box sx={{ml:"20px"}}>
                        <h3>Version Control</h3>
                        <p>Git</p>
                        <h3 style={{marginTop: "10px"}}>VCS Hosting</h3>
                        <p>GitHub</p>
                        <p>Vercel</p>
                        <h3 style={{marginTop: "10px"}}>Data Modeling</h3>
                        <p>Prisma</p>
                        <h3 style={{marginTop: "10px"}}>Data Base Management</h3>
                        <p>PostgreSQL</p>
                        <h3 style={{marginTop: "10px"}}>Validation</h3>
                        <p>Zod</p>
                        </Box>
                      </Box>
                    </Box>
              </Box>
              <Box ><h1 style={{marginTop: 85,color: "white",scrollMarginTop: '90px'}} id="targetThree-div">Projects</h1></Box>
                  
                  
              <Box sx={{display: 'flex',height: {lg: '350px',md: "350px",sm: "auto",xs: "auto"},minWidth: {lg: "350px",md: "350px",sm: "350px",xs: "300px"},maxWidth: {lg: "400px",md: "400px",sm: "400px",xs: "300px"},flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow",  }}>
                      <Box>
                        <h2 style={{marginTop: 10}}>Logestic Mini Web Software</h2>
                      </Box>
                      
                      <Box>
                          <h4 style={{marginTop: 3,lineHeight: 2}}>A mini Logistics Web Application built with HTML, CSS, React, and Next.js. This platform enables users to sell items, manage vendors, check real-time stock levels, modify item prices, purchase new inventory to replenish stock, and track supplier data. </h4>
                      </Box>

                      <Box sx={{display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "space-around",m: 2}}>
                        <h3 style={{margin:  "0px 20px 0px 0px",}}><a style={{color: 'black', textDecoration: 'underline'}} href="/logesticSoftware/office">View Project</a></h3>
                        <h3 style={{margin: 0}} ><a style={{color: 'black', textDecoration: 'underline'}} href="https://github.com/kyawlinaung47/portfolio">View Code</a></h3>
                      </Box>
                    
               </Box>
              
              <Box sx={{display: 'flex',height: {lg: '550px',md: "550px",sm: "auto",xs: "auto"},minWidth: {lg: "350px",md: "350px",sm: "350px",xs: "300px"},maxWidth: {lg: "400px",md: "400px",sm: "400px",xs: "300px"},flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow",  }}>
                <CommentComponent/>
              </Box>
              <Box sx={{fontSize: "20px",mt: 5}}>You can contact me at any time!</Box>
      <Box id="targetTwo-div" style={{scrollMarginTop: '75px'}} >
              <Typography style={{marginBottom: 50}} sx={{fontSize: {lg: "20px",md: "20px",sm: "16px",xs: "16px"},fontStyle: "bold",mt: 2}}  >Kyawlynnaung1995@gmail.com</Typography>
      </Box>

      
      {/* <Box ref={contactRef} sx={{ height: '200px', width: '100%', display: 'flex', alignItems: 'center', bgcolor: '#ffffff' }}>
        <Container>
          <Typography variant="h2">Contact Section</Typography>
          <Typography variant="h6">Get in touch here.</Typography>
        </Container>
      </Box> */}
    </Box>
    </>
  );
}
