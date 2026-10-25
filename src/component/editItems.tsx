import { handleEditItem } from "@/action";
import { prisma } from "@/libs/prisma";
import { Box, Button, TextField, Typography } from "@mui/material";




export default async function EditItems(){

    const editItem = await prisma.items.findFirst({where:{selected:true}})

    return(
        <Box sx={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center",mt: 3}} component="form" action={handleEditItem}>
            <TextField sx={{mt:1}} name="name" label="Name" defaultValue={editItem?.name}></TextField>
            <TextField sx={{mt:1}} name="price" label="Price" defaultValue={editItem?.price}></TextField>
            <TextField sx={{mt:1}} name="quantity" label="Quantity" defaultValue={editItem?.quantity}></TextField>
            <input hidden name="id" defaultValue={editItem?.id}></input>
            <Button sx={{mt:1}} type="submit" variant="contained">UPDATE</Button>
        </Box>
    )
}