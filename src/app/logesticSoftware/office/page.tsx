import CreateNew from "@/component/creatNew";
import EditItems from "@/component/editItems";
import HandleSelected from "@/component/handleSelected";
import VendorAdd from "@/component/vendorAdd";
import VendorAddShow from "@/component/vendorAddShow";
import { prisma } from "@/libs/prisma";
import { Box, Typography } from "@mui/material";

export const dynamic = 'force-dynamic'

export default async function Office(){

     const items =  await prisma.items.findMany();
     const suppliers = await prisma.supplier.findMany();
     const trueEditItem = await prisma.items.findFirst({where:{selected:true}});

    return (
        <Box sx={{display: 'flex',flexWrap: 'wrap',flexDirection: "row",width: "100%",alignItems: 'center',justifyContent: 'center',mt: 3}}>
            <Box sx={{display: 'flex',height: {lg: '550px',md: "550px",sm: "auto",xs: "auto"},maxWidth: {lg: "400px",md: "400px",sm: "400px",xs: "300px"},minWidth: {lg: "350px",md: "350px",sm: "350px",xs: "300px"},flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow"}}>
                <Box>
                    <Typography sx={{mt: 3,ml: 5,fontWeight: "bold",fontSize: "24px"}}>Vendors</Typography>
                    <CreateNew></CreateNew>
                </Box>
              </Box>
              <Box sx={{display: 'flex',height: {lg: '550px',md: "550px",sm: "auto",xs: "auto"},minWidth: {lg: "350px",md: "350px",sm: "350px",xs: "300px"},maxWidth: {lg: "400px",md: "400px",sm: "400px",xs: "300px"},flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow", mt: 2}}>
                  <Box sx={{maxWidth:"400px",mt: 3}}>
                    <Typography sx={{ml: 5,mb:2,fontWeight: "bold",fontSize: "24px"}}>Edit Itmes</Typography>
                    <HandleSelected items={items}></HandleSelected>
                  </Box>
                  <EditItems trueEditItem={trueEditItem}></EditItems>
              </Box>
              <Box sx={{display: 'flex',height: {lg: '550px',md: "550px",sm: "auto",xs: "auto"},minWidth: {lg: "350px",md: "350px",sm: "350px",xs: "300px"},maxWidth: {lg: "400px",md: "400px",sm: "400px",xs: "300px"},flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow",  }}>
                              <VendorAddShow ></VendorAddShow>
                </Box>
              <Box sx={{display: 'flex',height: {lg: '550px',md: "550px",sm: "auto",xs: "auto"},minWidth: {lg: "350px",md: "350px",sm: "350px",xs: "300px"},maxWidth: {lg: "400px",md: "400px",sm: "400px",xs: "300px"},flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow",  }}>
                 <VendorAdd suppliers={suppliers} items={items}></VendorAdd>
              </Box>
        </Box>
    )

}