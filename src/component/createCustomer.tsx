
"use client"

import { createCustomer } from "@/action";
import { Box, Typography, TextField, Button } from "@mui/material";
import toast from "react-hot-toast";

        const handleCreateCustomer = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget
      const response = await createCustomer(new FormData(e.currentTarget));
      if (response?.error) {
        console.log(response.error);
        toast.error(response.error);
      } else {
        toast.success("Success");
        form.reset();
      }}

export default  function CreateNewCustomer() {
    
    return (
            <Box sx={{display: "flex",flexDirection: "column",m:2}} component="form" onSubmit={handleCreateCustomer}>
                <Typography sx={{ml: 5,mt:1,fontWeight: "bold",fontSize: "24px"}}>Create Customer</Typography>
                <TextField sx={{width: 250,mb:1,mt: 3}} name="customerName" label="Name"></TextField>
                <TextField sx={{width:250,mt:2,mb:1}} type="number" name="customerCredit" label="Credit"></TextField>
                <Button sx={{mt: 2}} type="submit" variant="contained">Create</Button>
            </Box>
    )
     
}