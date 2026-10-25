
'use client'

import {  handleCloseTagVendorAdd, handleCloseTagVendorSaleAdd, handleVenderFieldSale } from "@/action";
import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
import { Customer, Items, } from "@prisma/client";
import {  useState } from "react";
import toast, { Toaster } from "react-hot-toast";


interface Prop{
  items: Items[]
  customers : Customer[]
};


export default function VendorAddFieldSale({items,customers}:Prop){

    const [value, setValue] = useState<Items | null>(null);
    const [customer, setCustomer] = useState<Customer | null>(null);
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
      const response = await handleVenderFieldSale(new FormData(e.currentTarget));
      if (response?.error) {
        console.log(response.error);
        toast.error(response.error);
      } else {
        toast.success("Success");
        setHidden(false)
      }
      
    }
    
    const handleCloseTagForVenderSale = async(e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      await handleCloseTagVendorSaleAdd(new FormData(e.currentTarget))
      setHidden(true)
      setValueArray([])
      setCustomer(null)
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
        <Typography sx={{mt: 3,ml: 5}}>FieldSale Vendor Add</Typography>
        <Toaster position="top-center"></Toaster>
        <Box component="form" onSubmit={handleCloseTagForVenderSale} sx={{display: isHidden? "none": "flex",flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
          <Box sx={{textTransform: "uppercase"}} >
            <h3>{customer?.name}</h3>
          </Box>
          <Box sx={{maxHeight: "100",}}  >{valueArray.map((item,index)=>{
            const itemPrice = (item.addQuantity?item.addQuantity: 0) * item.price;
            return (
              <Box key={index} sx={{display: "flex",flexDirection: "column",m: 2}} >
                <Box sx={{display: "flex",flexDirection: 'row',justifyContent: "space-around" ,alignItems: "center"}}>
                  <Box sx={{m: 2, textTransform: 'uppercase'}}>{item.name}</Box>
                  <Box sx={{m: 2}}>{item.addQuantity}</Box>
                  <Box sx={{m: 2}}>{itemPrice}</Box>
                  <Box sx={{m: 2}} >{item.price} </Box>
                </Box>
              </Box>
            )
        })}</Box>
          <Box sx={{flex: 1,textAlign: "right"}}>Total Price = {totalPrice}</Box>
          <Box sx={{display: "flex",flexDirection: "row"}}>
            <Button sx={{m:2}} variant="contained" type="submit">Close</Button>
            <Button sx={{m:2}} variant="contained" >Print</Button>
          </Box>
          
        </Box>
        <Box sx={{maxHeight: "100%",display: isHidden? "": "none",marginLeft: 3,marginTop: 3}} component="form" onSubmit={handleSubmit} >
          <Box sx={{display:"flex",flexDirection:"column",gap:"10px",maxHeight: "20%"}}> 
            <Autocomplete 
                  sx={{width:"200px"}}
                  value={customer}
                  onChange={(event, newCustomer) => {
                    setCustomer(newCustomer);
                    // Access the ID safely
                    if (newCustomer) {
                      console.log("Selected ID:", newCustomer.id);
                    }
                  }}
                  options={customers}
                  // 3. Tell MUI which object property to show in the dropdown
                  getOptionLabel={(option) => option.name}
                  // 4. (Optional but recommended) Prevent warnings when matching values
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  renderInput={(params) => <TextField {...params} label="Select a Buyer" />}
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
            <input hidden value={JSON.stringify(customer)} name="customerId" readOnly></input>
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
            <Box>Total Price  =  {totalPrice}</Box>
            <Button sx={{mt:2}} variant="contained" type="submit" >test</Button>
        </Box>
        </Box>
    )
}