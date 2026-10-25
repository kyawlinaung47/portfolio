import { prisma } from "@/libs/prisma";
import { Box } from "@mui/material";

export default async function VendorFieldSaleShowItmes() {

    const vendor = await prisma.saleVendor.findFirst({where: {selected:true}})
    if (!vendor) return;

    const customer = await prisma.customer.findFirst({where:{id:vendor.customerId}})
    const dateString = `${vendor.saleTime}`;
                const parts = dateString.split(' ')
                const date = `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`

    const vendorAddSaleItems = await prisma.saleVendorItems.findMany({where: {saleVendorId: vendor.id}})
    const itemIds = vendorAddSaleItems.map((item)=>{return item.itemId})




    const  items= await prisma.items.findMany({where: {id: {in: itemIds}}})


    let totalPrice = 0
    return (
        <Box sx={{height: "55%",overflowY: "auto"}}>
            <Box sx={{textTransform: "uppercase",mb: 1,ml: 1}}>{customer?.name} . {date}</Box>
            {vendorAddSaleItems.map((item,index)=>{
                        const itemPrice = (items.filter((priceItem)=> item.itemId === priceItem.id))[0].price
                        const saleItemPrice = item.itemQuantity * itemPrice
                        totalPrice += saleItemPrice
                return (
                    <Box key={index} sx={{display:"flex",justifyContent:"space-around",alignItems:"center",mb:1}}>
                        <Box sx={{textTransform: "uppercase",flex: 1, textAlign: "center"}}>{(items.filter((priceItem)=> item.itemId === priceItem.id))[0].name}</Box>
                        <Box sx={{flex: 1, textAlign: "center"}}>{item.itemQuantity}</Box>
                        <Box sx={{flex: 1, textAlign: "center"}}>{saleItemPrice}</Box>
                    </Box>
                )
            })}
            <Box sx={{ml: 20,mt: 2}}>Total Price = {totalPrice}</Box>
        </Box>
    )
    
}