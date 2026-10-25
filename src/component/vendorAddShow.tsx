


import { prisma } from "@/libs/prisma";
import { Box, Button, Typography } from "@mui/material";

import VendorAddShowItmes from "./vendorAddShowItem";
import VendorAddShowList from "./vendorAddShowList";


export default async function VendorAddShow() {

    const purchaseVendors = await prisma.purchaseVendor.findMany({orderBy: {id: 'desc'}});
    const suppliers = await prisma.supplier.findMany();
    
    
    

    return(
        <Box sx={{height: "100%"}}>
            <Typography sx={{mt: 3,ml: 5,fontWeight: "bold",fontSize: "24px"}}>Vendors</Typography>
            <VendorAddShowList purchaseVendors={purchaseVendors} suppliers={suppliers}></VendorAddShowList>
            <VendorAddShowItmes></VendorAddShowItmes>
        </Box>
    )
}