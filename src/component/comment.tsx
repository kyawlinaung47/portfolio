
'use server';
import { handleComment } from "@/action";
import { Box, Button, Input, TextField } from "@mui/material";
import fs from "fs";
import CommentForm from "./commentForm";
import { Toaster } from "react-hot-toast";

interface commentItem {
    comment: string;
    name: string
    id: number
}

export default async function CommentComponent() {
        const readFile = fs.readFileSync("comments.json", "utf-8");
        const commentsOriginal :commentItem[]= JSON.parse(readFile)
        const comments = commentsOriginal.reverse();
        const id = comments.length + 1;
    if (!comments) null;
    return (
        <Box sx={{}}>
            <Toaster position="top-center"/>
            <Box sx={{mt: 2,overflow: "auto",height: "320px"}}>
                {comments.map((item: commentItem )=>{
                    return (
                        <Box sx={{mb: 2,ml: 3,mt: 2}} key={item.id}>
                            <Box sx={{fontSize:16}}>{item.name}</Box>
                            <Box sx={{ml: 2,fontSize:19,mt:1}} >{item.comment}</Box>
                        </Box>
                    )
                })}
            </Box>
            <CommentForm id={id} />
        </Box>
    )
}
     