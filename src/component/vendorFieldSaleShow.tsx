


import { prisma } from "@/libs/prisma";
import { Box, Button, Typography } from "@mui/material";

import VendorFieldSaleShowList from "./vendorFieldSaleShowLIst";
import VendorFieldSaleShowItmes from "./vendorFieldSaleShowItem";


export default async function VendorFieldSaleShow() {

    const saleVendors = await prisma.saleVendor.findMany({orderBy: {id: 'desc'}});
    const customers = await prisma.customer.findMany();
    
    
    

    return(
        <Box sx={{height: "100%"}}>
            <Typography sx={{mt: 3,ml: 5,fontWeight: "bold",fontSize: "24px"}}>Vendors</Typography>
            <VendorFieldSaleShowList saleVendors={saleVendors} customers={customers}></VendorFieldSaleShowList>
            <VendorFieldSaleShowItmes></VendorFieldSaleShowItmes>
        </Box>
    )
}