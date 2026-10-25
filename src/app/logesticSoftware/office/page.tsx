import CreateNew from "@/component/creatNew";
import EditItems from "@/component/editItems";
import HandleSelected from "@/component/handleSelected";
import VendorAdd from "@/component/vendorAdd";
import VendorAddShow from "@/component/vendorAddShow";
import { prisma } from "@/libs/prisma";
import { Box, Typography } from "@mui/material";

export default async function Office(){

     const items =  await prisma.items.findMany();
     const suppliers = await prisma.supplier.findMany();
     const trueEditItem = await prisma.items.findFirst({where:{selected:true}});

    return (
        <Box sx={{display: 'flex',flexWrap: 'wrap',mt: "100px",flexDirection: "row",width: "100%",alignItems: 'center',justifyContent: 'center'}}>
            <Box sx={{display: 'flex',height: '550PX',maxWidth: "400px",minWidth:"350px",flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow"}}>
                <Box>
                    <Typography sx={{mt: 3,ml: 5}}>Vendors</Typography>
                    <CreateNew></CreateNew>
                </Box>
              </Box>
              <Box sx={{display: 'flex',height: '550PX',maxWidth: "400px",flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow", mt: 2}}>
                  <Box sx={{width:"400px",mt: 3}}>
                    <Typography sx={{ml: 5,mb:2}}>Edit Itmes</Typography>
                    <HandleSelected items={items}></HandleSelected>
                  </Box>
                  <EditItems trueEditItem={trueEditItem}></EditItems>
              </Box>
              <Box sx={{display: 'flex',height: '550PX',minWidth:"350px",maxWidth: "400px",flexDirection: 'column', flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',padding: 2,borderRadius: '10px',border: "ThreeDShadow", mt: 2}}>
                              <VendorAddShow ></VendorAddShow>
                </Box>
              <Box sx={{display: 'flex',height: '550PX',maxWidth: "400px",minWidth:"350px",flexDirection: 'column',padding: 2, flexWrap: 'wrap',color: 'white',bgcolor: '#07c0a7',margin: '20px',borderRadius: '10px',border: "ThreeDShadow"}}>
                 <VendorAdd suppliers={suppliers} items={items}></VendorAdd>
              </Box>
        </Box>
    )

}