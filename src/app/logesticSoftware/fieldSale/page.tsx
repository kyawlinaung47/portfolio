import CreateNewCustomer from "@/component/createCustomer";
import ShowQuantityAndPrice from "@/component/showItemquantityPrice";
import VendorAddFieldSale from "@/component/vendorAddFieldSale";
import VendorFieldSaleShow from "@/component/vendorFieldSaleShow";
import { prisma } from "@/libs/prisma";
import { Box } from "@mui/material";

export const dynamic = 'force-dynamic'

export default async function FieldSale() {
    
    const customers = await prisma.customer.findMany();
    const items =  await prisma.items.findMany();

    return (
        <Box sx={{display: 'flex',flexWrap: 'wrap',flexDirection: "row",width: "100%",alignItems: 'center',justifyContent: 'center'}}>
                <Box sx={{display: 'flex',height: '550PX',minWidth:"350px",maxWidth: "400px",flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow", mt: 2}}>
                <ShowQuantityAndPrice/>
               </Box>
               <Box sx={{display: 'flex',height: '550PX',minWidth:"350px",maxWidth: "400px",flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow", mt: 2}}>
                <CreateNewCustomer/>
               </Box>
                <Box sx={{display: 'flex',height: '550PX',minWidth:"350px",maxWidth: "400px",flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow", mt: 2}}>
                 <VendorAddFieldSale customers={customers} items={items}></VendorAddFieldSale>
                </Box>
                <Box sx={{display: 'flex',height: '550PX',minWidth:"350px",maxWidth: "400px",flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow", mt: 2}}>
                <VendorFieldSaleShow ></VendorFieldSaleShow>
                </Box>
        </Box>
    )
}