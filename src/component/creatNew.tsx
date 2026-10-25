"use client"

import { createCustomer, createItem, createSupplier } from "@/action";
import { Box, Button, TextField, Typography } from "@mui/material";
import toast, {  Toaster } from "react-hot-toast";



export default function CreateNew() {
        
    const handleCreateItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget
      const response = await createItem(new FormData(e.currentTarget));
      if (response?.error) {
        console.log(response.error);
        toast.error(response.error);
      } else {
        toast.success("Success");
        form.reset();
      }}

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

      const handleCreateSupplier = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget
      const response = await createSupplier(new FormData(e.currentTarget));
      if (response?.error) {
        console.log(response.error);
        toast.error(response.error);
      } else {
        toast.success("Success");
        form.reset();
      }}
    
    return (
      <Box sx={{width: "100%",mt: 1}}>
        <Box sx={{display:"flex",flexDirection: "row",flexWrap: "wrap",justifyContent: "space-around",alignItems: "center"}}>
            <Toaster position="top-center"></Toaster>
            <Box sx={{display: "flex",flexDirection: "column",mt: 2}} component="form" onSubmit={handleCreateItem}>
                <Typography>Create Item</Typography>
                <TextField sx={{maxWidth: 150,mb:1}} name="itemName" label="Name"></TextField>
                <TextField sx={{maxWidth:150,mb:1}} type="number" name="price" label="Price"></TextField>
                <Button type="submit" variant="contained">Create</Button>
            </Box>
            <Box sx={{display: "flex",flexDirection: "column",mt: 2}} component="form" onSubmit={handleCreateCustomer}>
                <Typography>Create Customer</Typography>
                <TextField sx={{maxWidth: 150,mb:1}} name="customerName" label="Name"></TextField>
                <TextField sx={{maxWidth:150,mb:1}} type="number" name="customerCredit" label="Credit"></TextField>
                <Button type="submit" variant="contained">Create</Button>
            </Box>
            <Box sx={{display: "flex",flexDirection: "column",mt: 2}} component="form" onSubmit={handleCreateSupplier}>
                <Typography>Create Supplier</Typography>
                <TextField sx={{maxWidth: 150,mb:1}} name="supplierName" label="Name"></TextField>
                <TextField sx={{maxWidth:150,mb:1}} type="number" name="supplierContact" label="Contact"></TextField>
                <Button type="submit" variant="contained">Create</Button>
            </Box>
        </Box>
      </Box>
    )
}