

import HomeComponent from "@/component/home";
import { Box } from "@mui/material";

export const dynamic = 'force-dynamic';

export default async function Home() {

 
  
  
  return (
    
      <Box sx={{ width: "100%",overflowX: "hidden" ,bgcolor: "red" }}>
        <HomeComponent/>
      </Box>
  );
}