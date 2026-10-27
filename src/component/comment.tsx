
'use server';
import { handleComment } from "@/action";
import { Box, Button, Input, TextField } from "@mui/material";
import fs from "fs";
import CommentForm from "./commentForm";
import { Toaster } from "react-hot-toast";
import { prisma } from "@/libs/prisma";
import { Comments } from "@prisma/client";

interface props {
    comments: Comments[];
    
}

export default async function CommentComponent() {
        
        const comments = await prisma.comments.findMany({
            orderBy: {
                id: 'desc'
            }
        });
        
    if (!comments) null;
    return (
        <Box sx={{}}>
            <Toaster position="top-center"/>
            <Box sx={{mt: 2,overflow: "auto",height: "320px"}}>
                {comments.map((item: Comments)=>{
                    return (
                        <Box sx={{mb: 2,ml: 3,mt: 2}} key={item.id}>
                            <Box sx={{fontSize:16}}>{item.email}</Box>
                            <Box sx={{ml: 2,fontSize:19,mt:1}} >{item.comment}</Box>
                        </Box>
                    )
                })}
            </Box>
            <CommentForm />
        </Box>
    )
}
     