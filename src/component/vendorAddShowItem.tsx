import { prisma } from "@/libs/prisma";
import { Box } from "@mui/material";

export default async function VendorAddShowItmes() {

    const vendor = await prisma.purchaseVendor.findFirst({where: {selected:true}})
    if (!vendor) return;
    const supplier = await prisma.supplier.findFirst({where:{id:vendor.supplierId}})
    const dateString = `${vendor.purchaseTime}`;
                const parts = dateString.split(' ')
                const date = `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`

    const Items = await prisma.purchaseVendorItems.findMany({where: {purchaseVendorId: vendor.id}})
    const ItemIds = Items.map((item)=>{return item.itemId})
    const vendorAddItems = await prisma.items.findMany({where: {id: {in: ItemIds}}})
    let totalPrice = 0
    return (
        <Box sx={{mt: 4,height: "55%",overflowY: "auto"}}>
            <Box sx={{textTransform: "uppercase",mb: 1,ml: 1}}>{supplier?.name} . {date}</Box>

            {vendorAddItems.map((item,index)=>{
                        const itemQuantity = (Items.filter((id)=> item.id === id.itemId))[0].itemQuantity;
                        const purchaseItemPrice = itemQuantity * item.price
                        totalPrice += purchaseItemPrice
                return (
                    <Box key={index} sx={{display:"flex",justifyContent:"space-around",alignItems:"center",mb:1}}>
                        <Box sx={{textTransform: "uppercase"}}>{item.name}</Box>
                        <Box>{(Items.filter((id)=> item.id === id.itemId))[0].itemQuantity}</Box>
                        <Box>{purchaseItemPrice}</Box>
                    </Box>
                )
            })}
            <Box sx={{ml: 20,mt: 2}}>Total Price = {totalPrice}</Box>
        </Box>
    )
    
}