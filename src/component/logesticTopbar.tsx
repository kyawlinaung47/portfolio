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
            <Box sx={{ml: {lg: 3,md:3,sm:1,xs:1},p: "5px 15px 5px 15px",borderRadius: 2 }}><Link sx={{color: 'white',fontSize: "30px",textDecoration: "none"}} href="/">Home</Link></Box>
            <Box sx={{display: "flex",flexDirection: "row",alignItems:"center",justifyContent: "center"}}>
                {topBarItems.map((item,index)=>{
                    return (
                        <Link sx={{m: 1,textDecoration: "none",}} key={index} href={item.href}>
                            <ListItem
                                disablePadding
                            sx={{
                                backgroundColor: pathName.includes(item.pathName)
                                ? "#457B9D"
                                : null,
                                
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



            