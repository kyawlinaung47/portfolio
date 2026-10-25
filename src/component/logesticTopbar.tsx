"use client"

import { Box, Link, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { usePathname } from "next/navigation";



interface topBarItems{
        id: number;
        label: string;
        href: string;
        pathName: string
    }


const topBarItems: topBarItems[] = [
    
    {
        id: 1,
        label: "Office",
        href: "/logesticSoftware/office",
        pathName: "office"
    },
    {
        id: 2,
        label: "Field Sale",
        href: "/logesticSoftware/fieldSale",
        pathName: "fieldSale"
    }

]

export default  function LogesticTopbar() {

    const pathName = usePathname()
        
     return (
        <Box sx={{display: "flex",flexDirection: "row",alignItems: "center", justifyContent: "space-between",bgcolor: "#143a52"}}>
            <Box sx={{ml: 5,p: "10px 30px 10px 30px",borderRadius: 2 }}><Link sx={{color: 'white',fontSize: "30px"}} href="/">Home</Link></Box>
            <Box sx={{display: "flex",flexDirection: "row",alignItems:"center",justifyContent: "center",mr: 5}}>
                {topBarItems.map((item,index)=>{
                    return (
                        <Link sx={{m: 2}} key={index} href={item.href}>
                            <ListItem
                                disablePadding
                            sx={{
                                backgroundColor: pathName.includes(item.pathName)
                                ? "#457B9D"
                                : null,
                                ":hover": { backgroundColor: "#457B9D" },
                            }}
            >
                            <ListItemButton>
                                {/* <ListItemIcon sx={{ color: "#E8F6EF" }}>
                                {item.icon}
                                </ListItemIcon> */}
                                <ListItemText primary={item.label} sx={{ color: "#E8F6EF" }} />
                            </ListItemButton>
                            </ListItem>
                        </Link>
                    )
                })}
                </Box>
            </Box>
     )
}



            