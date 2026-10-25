"use client"

import { handleEditItem } from "@/action";
import { Box, Button, TextField } from "@mui/material";
import { Items } from "@prisma/client";
import toast from "react-hot-toast";

interface Props{
    trueEditItem: Items | null}


export default  function EditItems({ trueEditItem }: Props) {

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>",trueEditItem)
    const submitHandleEditItem = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = e.currentTarget
          const response = await handleEditItem(new FormData(e.currentTarget));
          if (response?.error) {
            console.log(response.error);
            toast.error(response.error);
          } else {
            toast.success("Success");
            form.reset();
          }}

    

    return(
        <Box sx={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center",mt: 3}} component="form" onSubmit={submitHandleEditItem}>
            <TextField sx={{mt:1}} name="name" label="Name" defaultValue={trueEditItem?.name}></TextField>
            <TextField sx={{mt:1}} name="price" label="Price" defaultValue={trueEditItem?.price}></TextField>
            <TextField sx={{mt:1}} name="quantity" label="Quantity" defaultValue={trueEditItem?.quantity}></TextField>
            <input hidden name="id" defaultValue={trueEditItem?.id}></input>
            <Button sx={{mt:1}} type="submit" variant="contained">UPDATE</Button>
        </Box>
    )
}