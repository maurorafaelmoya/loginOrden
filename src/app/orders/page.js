'use client'
import MiniDrawer from "@/components/pageDrawer"
import { usePathname } from "next/navigation"



const page = () => {
    const pathname = usePathname()
    
    return (
        <MiniDrawer>
            
            {pathname}
        </MiniDrawer>
    )
}

export default page