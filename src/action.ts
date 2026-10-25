"use server";

import fs from "fs";
import { revalidatePath } from "next/cache";
import { prisma } from "./libs/prisma";
import { Items } from "@prisma/client";
import z, { number, ZodError } from "zod";

const commentData = z.object({
        comment: z.string().min(1, "Comment is required"),
        name: z.string().min(1, "Name is required"),
        id: number().int().positive("Id must be a positive integer"),

})

const items = z.object({
        itemName: z.string().min(1,"Name is required"),
        itemQuantity: number().int().min(0,"Item quantity is required"),
        price: z.number("Price must be number").int().positive("Price must be positive")
})

const customers = z.object({
        customerName: z.string().min(1,"Name is required"),
        customerCredit: number().int().min(0,"Credit is required"),
})


export async function handleComment(formData: FormData) {
        try{
        const {comment,name,id } = commentData.parse({
                comment: formData.get("comment"),
                name: formData.get("name"),
                id: Number(formData.get("id"))
        })
        
        const commentItem = {comment,name,id}
        const commentsFile= fs.readFileSync("comments.json", "utf-8");
        const comments = JSON.parse(commentsFile);
        comments.push(commentItem);
        fs.writeFileSync("comments.json", JSON.stringify(comments));
        revalidatePath("/")
        }catch (error) {
                if(error instanceof ZodError){
                        const errorMessages = error.issues.map((item) => item.message).join(",");
                        return { error: errorMessages };
                }
                return { error: "An unexpected error occurred" };
        }       
}

const nameCheck = z.object({
        exist: z.literal(true,"Name already exist")
})
    
export async function createItem(formData :FormData) {
        try{
        
        const {itemName,itemQuantity,price} = items.parse({
                         itemName : formData.get("itemName") as string,
                         itemQuantity: 0,
                         price : Number(formData.get("price")),
                        })
        const itemNameCheck = await prisma.items.findFirst({where:{name: itemName}})

        const {exist} = nameCheck.parse({
                        exist: itemNameCheck? false: true,
                })
        
        
        await prisma.items.create({data: {name: itemName,quantity: Number(itemQuantity),price: Number(price)}})
        revalidatePath("/")
        }catch (error) {
                if(error instanceof ZodError){
                        const errorMessages = error.issues.map((item) => item.message).join(",");
                        return { error: errorMessages };
                }
                return { error: "An unexpected error occurred" };
        }       
}
        
        


export async function createCustomer(formData :FormData) {
        try{
                const {customerName , customerCredit} = customers.parse({
                customerName: formData.get("customerName") as string,
                customerCredit: Number(formData.get("customerCredit")),
        })

        const customerNameCheck = await prisma.customer.findFirst({where:{name: customerName}})

        const {exist} = nameCheck.parse({
                        exist: customerNameCheck? false: true,
                })
        await prisma.customer.create({data: {name: customerName,credit: Number(customerCredit)}})
        revalidatePath("/")
        }catch (error) {
                if(error instanceof ZodError){
                        const errorMessages = error.issues.map((item) => item.message).join(",");
                        return { error: errorMessages };
                }
                return { error: "An unexpected error occurred" };
        }       
}
        


const suppliers = z.object({
        supplierName: z.string().min(1,"Name is required"),
        supplierContact: z.string()
})

export async function createSupplier(formData :FormData) {
        try{
                const {supplierName, supplierContact} = suppliers.parse({
         supplierName : formData.get("supplierName") as string,
         supplierContact : formData.get("supplierContact"),
        })
        
        const supplierNameCheck = await prisma.supplier.findFirst({where:{name: supplierName}})

        const {exist} = nameCheck.parse({
                        exist: supplierNameCheck? false: true,
                })
        await prisma.supplier.create({data: {name: supplierName,contact: Number(supplierContact)}})
        revalidatePath("/")
        }catch (error) {
                if(error instanceof ZodError){
                        const errorMessages = error.issues.map((item) => item.message).join(",");
                        return { error: errorMessages };
                }
                return { error: "An unexpected error occurred" };
        }
        
}



export async function handleSelected(formData :FormData) {
        const oldSelected = await prisma.items.findFirst({where:{selected:true}})
        if (oldSelected){
                await prisma.items.update({where:{id:oldSelected?.id},data:{selected:false}})
        }
        const selectedId = formData.get("selectedId")
       //const selectedItem = await prisma.items.findFirst({where:{id: Number(selectedId)}})
        await prisma.items.update({where:{id:Number(selectedId)},data:{selected: true}});
        revalidatePath("/");
}

export async function handleEditItem(formData :FormData) {
        const {itemName,itemQuantity,price} = items.parse({
                         itemName : formData.get("itemName") as string,
                         itemQuantity : formData.get("itemQuantity"),
                         price : formData.get("price"),
        })
        const id =formData.get('id');
        await prisma.items.update({where:{id:Number(id)},data: {name: itemName,quantity: Number(itemQuantity),price: Number(price)}})
        revalidatePath("/logesticSoftware/office")
}

export async function handleRemoveItem(formData :FormData) {
        revalidatePath("/vendorAdd");
}

const vendorAddItem= z.object({
        supplierId: z.number("Supplier must be choose")
})

export async function handleTest(formData :FormData) {
        try{
        const itemsString = formData.getAll("items") as string[];
        const items= JSON.parse(itemsString[0]);
        const supplierIdString = formData.get("supplierId") as string;
        const supplier= JSON.parse(supplierIdString);
        
        const { supplierId } = vendorAddItem.parse({
                supplierId: supplier?supplier.id : null,
        })
        
        const newVendor = await prisma.purchaseVendor.create({data:{supplierId: Number(supplierId)}})
         const purchaseVendorItem = items.map((item: Items) => {

          return {
                 purchaseVendorId: newVendor.id,
                 itemId: item.id,
                 itemQuantity: Number(item.addQuantity) || 0,
           }})
         await prisma.purchaseVendorItems.createMany({data: purchaseVendorItem})
         const originalItems = await prisma.items.findMany({where:{id:{in: items.map((item: Items) => item.id)}}})
         console.log("originalItems>>>>>>>>>>>>>>>>",originalItems)
         const originalItemsQuantitys = originalItems.map((item: Items) => {
          return {
                 id: item.id,
                 quantity: item.quantity,
           }})
        //// More Good Logics
        // const updateItemsQuantitys = items.map((item: Items) => {
        //   return {
        //          id: item.id,
        //          quantity: item.quantity + (item.addQuantity || 0),
        //    }})

        const updateItemsQunatitys = items.map((item: Items) => {
          return {
                 id: item.id,
                 quantity: item.addQuantity
           }})
        
           const updatedItems = originalItemsQuantitys.map(item1 => {
        // Find the item with the same ID in the second array
                const updateItemQuantity = updateItemsQunatitys.find((item: any) => item.id === item1.id);
  
                return {
                        id: item1.id,
                        quantity: item1.quantity + Number(updateItemQuantity ? updateItemQuantity.quantity : 0)
                };});

                console.log("updatedItems>>>>>>>>>>>>>>>>",updatedItems)

                updatedItems.forEach(async (item) => {
                  await prisma.items.update({
                    where: { id: item.id },
                    data: { quantity: item.quantity },
                  });
                });
        // console.log("items",items)
        // console.log("supplierId",supplierId)
        revalidatePath("/vendorAdd");
        }catch (error) {
                if(error instanceof ZodError){
                        const errorMessages = error.issues.map((item) => item.message).join(",");
                        return { error: errorMessages };
                }
                return { error: "An unexpected error occurred" };
        }  
}

const vendorFieldSale= z.object({
        customerId: z.number("Customer must be choose")
})


export async function handleVenderFieldSale(formData :FormData) {
        try{
        const itemsString = formData.getAll("items") as string[];
        const items= JSON.parse(itemsString[0]);
        const customerString = formData.get("customerId") as string;
        const customer= JSON.parse(customerString);
        const {customerId} = vendorFieldSale.parse({
                customerId: customer? customer.id : null
        })
        const newVendor = await prisma.saleVendor.create({data:{customerId: Number(customerId)}})
         const saleVendorItem = items.map((item: Items) => {

          return {
                 saleVendorId: newVendor.id,
                 itemId: item.id,
                 itemQuantity: Number(item.addQuantity) || 0,
           }})
         await prisma.saleVendorItems.createMany({data: saleVendorItem})
         const originalItems = await prisma.items.findMany({where:{id:{in: items.map((item: Items) => item.id)}}})
         console.log("originalItems>>>>>>>>>>>>>>>>",originalItems)


        //  const originalItemsQuantitys = originalItems.map((item: Items) => {
        //   return {
        //          id: item.id,
        //          quantity: item.quantity,
        //    }})


        //// More Good Logics
        const updateItems = items.map((item: Items) => {
          return {
                 id: item.id,
                 name: item.name,
                 price: item.price,
                 quantity: item.quantity - Number(item.addQuantity || 0),
                 addQuality: 0,
           }})

        // const updateItemsQunatitys = items.map((item: Items) => {
        //   return {
        //          id: item.id,
        //          quantity: item.addQuantity
        //    }})
        
        //    const updatedItems = originalItemsQuantitys.map(item1 => {
        // // Find the item with the same ID in the second array
        //         const updateItemQuantity = updateItemsQunatitys.find((item: any) => item.id === item1.id);
  
        //         return {
        //                 id: item1.id,
        //                 quantity: item1.quanttity + Number(updateItemQuantity ? updateItemQuantity.quantity : 0)
        //         };});

                console.log("updatedItems>>>>>>>>>>>>>>>>",updateItems)

                updateItems.forEach(async (item: Items) => {
                  await prisma.items.update({
                    where: { id: item.id },
                    data: { name: item.name,price: item.price,quantity: item.quantity ,addQuantity: item.addQuantity},
                  });
                });
        revalidatePath("/vendorAdd")
        // console.log("items",items)
        // console.log("supplierId",supplierId)
        }catch (error) {
                if(error instanceof ZodError){
                        const errorMessages = error.issues.map((item) => item.message).join(",");
                        return { error: errorMessages };
                }
                return { error: "An unexpected error occurred" };
        } 
        
}

export async function handleCloseTagVendorAdd(formData: FormData) {
        revalidatePath('/vendorAdd')
}

export async function handleCloseTagVendorSaleAdd(formData: FormData) {
        revalidatePath('/vendorAddFieldSale')
}


export async function handleVendorSelected(id: number) {
        const oldSelected = await prisma.purchaseVendor.findFirst({where: {selected: true}})
        if (oldSelected){
                await prisma.purchaseVendor.update({where:{id:oldSelected.id},data:{selected:false}})
        }
       //const selectedItem = await prisma.items.findFirst({where:{id: Number(selectedId)}})
        await prisma.purchaseVendor.update({where:{id:Number(id)},data:{selected: true}});
        revalidatePath("/logesticSoftware/office");
}

export async function handleSaleVendorSelected(id: number) {
        const oldSelected = await prisma.saleVendor.findFirst({where: {selected: true}})
        if (oldSelected){
                await prisma.saleVendor.update({where:{id:oldSelected.id},data:{selected:false}})
        }
       //const selectedItem = await prisma.items.findFirst({where:{id: Number(selectedId)}})
        await prisma.saleVendor.update({where:{id:Number(id)},data:{selected: true}});
        revalidatePath("/logesticSoftware/fieldSale");
}