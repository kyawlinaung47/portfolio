import LogesticTopbar from "@/component/logesticTopbar";

interface Prop{
    children: React.ReactNode;
}


export default async function logesticLayout({children}: Prop) {

    return (
        <>
        <LogesticTopbar></LogesticTopbar>
        {children}
        </>
    )
    
}