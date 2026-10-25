import { prisma } from "@/libs/prisma";
import { Box, Typography } from "@mui/material";

export default async function ShowQuantityAndPrice  () {

        const items = await prisma.items.findMany();
    return (
        <Box>
            <Typography sx={{mt: 3,ml: 5,fontWeight: "bold",fontSize: "24px"}}>Items Quantitys and Prices</Typography>
            <Box sx={{display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "space-around"}}>
                <h3>Item Name</h3>
                <h3>Item Quantity</h3>
                <h3>Item Price</h3>
            </Box>
            <Box>
            {items.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ flex: 1,textAlign: "center", textTransform: 'uppercase' }}>{item.name}</Box>
                    <Box sx={{ flex: 1, textAlign: "center",size: "h5" }}>{item.quantity}</Box>
                    <Box sx={{ flex: 1, textAlign: 'center',size: "h5" }}>{item.price}</Box>
                </Box>
            ))}
            </Box>
        </Box>
    )
}