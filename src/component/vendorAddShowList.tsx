

"use client"

import { handleTest, handleVendorSelected } from "@/action";
import { Box, Button } from "@mui/material";
import { PurchaseVendor, supplier } from "@prisma/client";
import { useState } from "react";



interface Props{
    purchaseVendors: PurchaseVendor[];
    suppliers: supplier[]
}

    

export default  function VendorAddShowList( {purchaseVendors,suppliers} : Props) {

    const [vendorId,setVendorId] = useState(1)
    const handleSelected = async (id: number) => {
        await handleVendorSelected(id)
    }

    return(
        <Box sx={{width: "100%",height: "35%",overflowY: "auto",mt: 3}}>
            <input hidden name="vendorId" defaultValue={vendorId} ></input>
            {purchaseVendors.map((vendor,index) => {
                const dateString = `${vendor.purchaseTime}`;
                const parts = dateString.split(' ')
                const date = `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`
                return(
                    <Box key={index} sx={{width: "100%"}}> 
                    <Button sx={{width: "100%"}} key={vendor.id} onClick={ ()=>  {
                    setVendorId(vendor.id);
                    console.log(">>>>>>>>>>>>>",vendor.id)
                    handleSelected(vendor.id)
                    
                     }}>
                    <Box  sx={{ display: 'flex',width: '100%', justifyContent: 'space-around', alignItems: 'center', mb: 2,color: "white" }}>
                        <Box sx={{ textAlign: "center", textTransform: 'uppercase' }}>{suppliers.find((supplier) => supplier.id === vendor.supplierId)?.name}</Box>
                        <Box>{date}</Box>
                    </Box>
                    </Button>
                    </Box>
                )
            })}
        </Box>
    )
}