"use client";

import { handleComment } from "@/action";
import { Box, TextField, Button } from "@mui/material";
import toast from "react-hot-toast";




export default  function CommentForm(){
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
                <TextField sx={{margin: 1,width: 280}} name="email" type="email" label="Email" />
                <TextField sx={{margin: 1,width: 300}} name="comment" type="text" label="Comment" variant="outlined" fullWidth multiline rows={1} />
                <Button sx={{margin:1}} type="submit" variant="contained" color="primary">Submit</Button>
            </Box>
    )
}