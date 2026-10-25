import CommentComponent from "@/component/comment";
import { Box, Typography } from "@mui/material";

export default async function Home() {


    return (
        <Box sx={{display: 'flex',flexWrap: 'wrap',mt: "100px",flexDirection: "row",width: "100%",alignItems: 'center',justifyContent: 'center'}}>
            
              
              <Box sx={{display: 'flex',height: '550PX',maxWidth: "400px",flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow",  }}>
                <Box sx={{ml:"140px",mt: "10px"}}>
                  <h1>Languages</h1>
                </Box>
                <Box>
                  <Box sx={{ml:"20px"}}>
                  <h3>HTML</h3>
                  <h3 style={{marginTop: "10px"}}>CSS</h3>
                  <h3 style={{marginTop: "10px"}}>JavaScript</h3>
                  <p>Syntax,Operators,ifconditions,loops,Arrays,Objects</p>
                  <p>DOM Manipulation,Event Handling,</p>
                  <p>Functions,ES6 Features,Promises,Async/Await</p>
                  <p>JSON,Fetch API,Local Storage,Session Storage</p>
                  <p>Regular Expressions,Error Handling,Modules</p>
                  <h3 style={{marginTop: "10px"}}>TypeScript</h3>
                  <p>Static Types,Early Error Catching</p>
                  </Box>
                </Box>
              </Box>

              
              <Box sx={{display: 'flex',height: '550PX',maxWidth: "400px",flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow",  }}>
                <Box sx={{ml:"140px",mt: "10px"}}>
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
              <Box sx={{display: 'flex',height: '550PX',maxWidth: "400px",flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow",  }}>
                <Box sx={{ml:"140px",mt: "10px"}}>
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
                  <p></p>
                  </Box>
                </Box>
              </Box>
              <Box sx={{display: 'flex',height: '550PX',maxWidth: "400px",flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow",  }}>
                <Box sx={{ml:"140px",mt: "10px"}}>
                  <h1>VCS Hosting</h1>
                </Box>
                <Box>
                  <Box sx={{ml:"20px"}}>
                  <h3>GitHub</h3>
                  <h3 style={{marginTop: "10px"}}>Vercel</h3>
                  </Box>
                </Box>
              </Box>
        </Box>
    )
    
}