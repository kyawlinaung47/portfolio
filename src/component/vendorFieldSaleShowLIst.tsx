

"use client"

import { handleSaleVendorSelected } from "@/action";
import { Box, Button } from "@mui/material";
import { Customer, saleVendor} from "@prisma/client";
import { useState } from "react";



interface Props{
    saleVendors: saleVendor[];
    customers: Customer[]
}

    

export default  function VendorFieldSaleShowList( {saleVendors,customers} : Props) {

    const [vendorId,setVendorId] = useState(1)
    const handleSelected = async (id: number) => {
        await handleSaleVendorSelected(id)
    }

    return(
        <Box sx={{width: "100%",height: "35%",overflowY: "auto",mt: 3}}>
            <input hidden name="vendorId" defaultValue={vendorId} ></input>
            {saleVendors.map((vendor,index) => {
                const dateString = `${vendor.saleTime}`;
                const parts = dateString.split(' ')
                const date = `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`
                return(
                    <Box key={index} sx={{width: "100%"}}> 
                    <Button sx={{width: "100%"}} key={vendor.id} onClick={ ()=>  {
                    setVendorId(vendor.id);
                    handleSelected(vendor.id)
                    
                     }}>
                    <Box  sx={{ display: 'flex',width: '100%', justifyContent: 'space-around', alignItems: 'center', mb: 2,color: "white" }}>
                        <Box sx={{ textAlign: "center", textTransform: 'uppercase' }}>{customers.find((customer) => customer.id === vendor.customerId)?.name}</Box>
                        <Box>{date}</Box>
                    </Box>
                    </Button>
                    </Box>
                )
            })}
        </Box>
    )
}