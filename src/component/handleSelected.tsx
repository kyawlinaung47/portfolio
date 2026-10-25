
"use client"

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { Items } from '@prisma/client';
import { Box, Button } from '@mui/material';
import { handleSelected } from '@/action';

interface Prop{
  items: Items[]
};

// 1. Define options as objects with id and label

export default function HandleSelected({items}:Prop) {
  // 2. State holds the entire selected object (or null)
  const [value, setValue] = useState<Items | null>(null);

  return (
    <Box sx={{display:'flex',flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:"100%",maxWidth:"400px"}} >
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
    <Box  component="form" action={handleSelected}>
      <input hidden name="selectedId" defaultValue={value?.id}></input>
      <Button variant='contained' type='submit'>ENTER</Button>
    </Box>
    </Box>
  );
}
