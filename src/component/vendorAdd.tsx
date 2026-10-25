
'use client'

import { handleCloseTagVendorAdd, handleTest } from "@/action";
import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
import { Items, supplier } from "@prisma/client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


interface Prop{
  items: Items[]
  suppliers : supplier[]
};


export default function VendorAdd({items,suppliers}:Prop){

    const [value, setValue] = useState<Items | null>(null);
    const [supplier, setSupplier] = useState<supplier | null>(null);
    const [valueArray, setValueArray] = useState<Items[]>([]);
    const [isHidden,setHidden] = useState(true)

    const totalPrice = valueArray.reduce((sum, item) => {
      return sum + (Number(item.addQuantity) || 0) * item.price;
    }, 0);

     const handleAdd = () =>{
      if(value){
        //setValueArray((prevArray)=>[...prevArray,value])
        setValueArray([...valueArray,value])
        setValue(null)
      }
      console.log("kkkkkkkk",valueArray)
     }

     const handleQuantityChange = (event: any, itemId: number,index: number) => {
      const quantity = event.target.value;

      setValueArray((prevArray) =>
        prevArray.map((item,prevIndex) =>
          item.id === itemId && prevIndex === index ? { ...item, addQuantity: quantity } : item,
        ),
      );
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const response = await handleTest(new FormData(e.currentTarget));
      if (response?.error) {
        console.log(response.error);
        toast.error(response.error);
      } else {
        toast.success("Success");
        setHidden(false)
      }
      
      // setValueArray([])
      // setSupplier(null)
      // setValue(null)
    }

    const handleCloseTagForVenderAdd = async(e: React.FormEvent<HTMLFormElement>) =>{
          e.preventDefault();
          await handleCloseTagVendorAdd(new FormData(e.currentTarget))
          setHidden(true)
          setValueArray([])
          setSupplier(null)
          setValue(null)
        }
    
    const handleRemove = (itemId: number,index: number) => {
      setValueArray((prevArray) => prevArray.filter((item, i) => !(item.id === itemId && i === index)));
    }

    // useEffect(() => {
    //   console.log("lllllll",valueArray)
    // }, [valueArray]);
    
    return(
      <Box sx={{maxHeight: "100%"}} >
        <Typography sx={{mt: 3,ml: 5,fontWeight: "bold",fontSize: "24px"}}>Add Vendor</Typography>
        <Toaster position="top-center"></Toaster>
        <Box component="form" onSubmit={handleCloseTagForVenderAdd} sx={{display: isHidden? "none": "flex",flexDirection: "column",alignItems: "center",justifyContent: "space-around"}}>
                  <Box >
                    <h3 >{supplier?.name?.toUpperCase()}</h3>
                  </Box>
                  <Box sx={{maxHeight: "100",}}  >{valueArray.map((item,index)=>{
                    const itemPrice = (item.addQuantity?item.addQuantity: 0) * item.price;
                    console.log(">>>>>><<<",item.price)
                    console.log(">>>>>>",item.addQuantity)
                    return (
                      <Box key={index} sx={{display: "flex",flexDirection: "column",m: 2}} >
                        <Box sx={{display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "space-around"}}>
                          <Box sx={{textAlign: "left", textTransform: 'uppercase',m: 2}} >{item.name}</Box>
                          <Box sx={{textAlign: "right",m: 2}}>{item.price} </Box>
                          <Box sx={{m: 2}}>{item.addQuantity}</Box>
                          <Box sx={{m: 2}}>{itemPrice}</Box>
                        </Box>
                      </Box>
                    )
                })}</Box>
                  <Box>TOTAL PRICE</Box>
                  <Box>{totalPrice}</Box>
                  <Box sx={{display: "flex", justifyContent: "space-around",mt:5,alignItems: "center"}}>
                    <Button sx={{m:2}} variant="contained" type="submit">Close</Button>
                    <Button sx={{m:2}} variant="contained" >Print</Button>
                  </Box>
                  
        </Box>
        <Box sx={{maxHeight: "100%",display: isHidden? "": "none",flexDirection: "column",mt: 3,ml:3 }} component="form" onSubmit={handleSubmit} >
          <Box sx={{display:"flex",flexDirection:"column",gap:"10px",maxHeight: "20%"}}> 
            <Autocomplete 
                  sx={{width:"200px"}}
                  value={supplier}
                  onChange={(event, newSupplier) => {
                    setSupplier(newSupplier);
                    // Access the ID safely
                    if (newSupplier) {
                      console.log("Selected ID:", newSupplier.id);
                    }
                  }}
                  options={suppliers}
                  // 3. Tell MUI which object property to show in the dropdown
                  getOptionLabel={(option) => option.name}
                  // 4. (Optional but recommended) Prevent warnings when matching values
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  renderInput={(params) => <TextField {...params} label="Select a Supplier" />}
                />
            <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
               <Autocomplete 
                  sx={{width:"200px"}}
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    // Access the ID safely
                    if (newValue) {
                      console.log("Selected ID:", newValue.id);
                    }
                  }}
                  options={items}
                  // 3. Tell MUI which object property to show in the dropdown
                  getOptionLabel={(option) => option.name}
                  // 4. (Optional but recommended) Prevent warnings when matching values
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  renderInput={(params) => <TextField {...params} label="Select a Item" />}
                />
                <Button variant="contained" onClick={handleAdd}>ADD</Button>
            </Box>
           </Box>  
           <input hidden value={JSON.stringify(valueArray)} name="items" readOnly></input>
            <input hidden value={JSON.stringify(supplier)} name="supplierId" readOnly></input>
            <Box sx={{overflowY: "auto",maxHeight: "300px",'&::-webkit-scrollbar': { width: '3px',height: '5px',},'&::-webkit-scrollbar-track': {backgroundColor: '#f1f1f1',borderRadius: '4px',},'&::-webkit-scrollbar-thumb': { backgroundColor: '#888',
      borderRadius: '4px',
    },
    // 4. Target the thumb on hover
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#555',
    },}}>      
              <Box sx={{display:"flex",flexDirection:"column",gap:"10px",mt:2}}>
              {valueArray.map((item,index)=>{
                return (
                  <Box sx={{display:"flex",flexDirection:"row",gap:"10px",overflowY: 'auto'}} key={index}>
                    <Box >
                      <Box sx={{fontSize: "20px"}} >{item.name}</Box>
                      <TextField
                        sx={{mt:1}}
                        name="addQuantity"
                        label="addQuantity"
                        value={item.addQuantity ?? ""}
                        onChange={(event) => handleQuantityChange(event, item.id,index)}
                      />
                    </Box>
                      <Box sx={{display:"flex",alignItems:"center",gap:"10px",mr:2}}>
                          <Button variant="contained" type="button" onClick={() => handleRemove(item.id,index)}>Remove</Button>
                      </Box>
                  </Box>
                ) 
              })}
              </Box>
            </Box>
            <Box>Total Price</Box>
            <Box>{totalPrice}</Box>
            <Button sx={{mt:2}} variant="contained" type="submit">test</Button>
        </Box>
        </Box>
    )
}