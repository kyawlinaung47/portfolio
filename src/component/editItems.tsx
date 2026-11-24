"use client"

import { handleEditItem } from "@/action";
import { Items } from "@prisma/client";
import toast from "react-hot-toast";
import { upload } from "@vercel/blob/client";
import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import { put } from "@vercel/blob";


interface Props{
    trueEditItem: Items | null}


export default  function EditItems({ trueEditItem }: Props) {

    const submitHandleEditItem = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            const file = formData.get("image") as File;
            console.log("file", file);


            if (file.size > 0) {
                const { url } = await upload(file.name, file, {
                    access: "public",
                    handleUploadUrl: "/api/upload"
                });
                
                console.log("url", url);
                formData.set("image", url);
            } else if (trueEditItem?.image) {
                formData.set("image", trueEditItem.image);
            }

          const response = await handleEditItem(formData);
          if (response?.error) {
            console.log(response.error);
            toast.error(response.error);
          } else {
            toast.success("Success");
            form.reset();
          }}

    

    return(
        <Box sx={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center",mt: 3}} component="form" onSubmit={submitHandleEditItem}>
            <Image loading="eager" style={{borderRadius: 5}}  src={trueEditItem?.image || "/blue-skies-drink-735x1103.jpg"} alt={"Item Image"} width={100} height={100}></Image>
            <TextField sx={{mt:1}} name="name" label="Name" defaultValue={trueEditItem?.name}></TextField>
            <TextField sx={{mt:1}} name="price" label="Price" defaultValue={trueEditItem?.price}></TextField>
            <TextField sx={{mt:1}} name="quantity" label="Quantity" defaultValue={trueEditItem?.quantity}></TextField>
            <input style={{margin:8}} type="file" name="image" accept="image/*" />
            <input hidden name="id" defaultValue={trueEditItem?.id}></input>
            <Button sx={{mt:1}} type="submit" variant="contained">UPDATE</Button>
        </Box>
    )
}
