"use client";

import { handleComment } from "@/action";
import { Box, TextField, Button } from "@mui/material";
import toast from "react-hot-toast";

interface Props{
    id: number;

}


export default  function CommentForm({id}:Props){
const handleCommentClient = async(FormData: FormData)=>{
const response = await handleComment(FormData);
      if (response?.error) {
        console.log(response.error);
        toast.error(response.error);
      } else {
        toast.success("Success");
      }
      return;
}
    

    return(
        <Box sx={{bottom: 0}} component="form" action={handleCommentClient}>
                <input hidden defaultValue={id} name="id"/>
                <TextField sx={{margin: 1}} name="name" label="name" />
                <TextField sx={{margin: 1,width: 300}} name="comment" label="Comment" variant="outlined" fullWidth multiline rows={1} />
                <Button sx={{margin:1}} type="submit" variant="contained" color="primary">Submit</Button>
            </Box>
    )
}