'use client'
import MiniDrawer from "@/components/pageDrawer"
import { usePathname } from "next/navigation"
import { supabase } from "../supabase/configSupabase"
import { useEffect, useState } from "react"
import { Stack, Typography } from "@mui/material"
import TableOrdens from "@/components/tableOrder"



const page = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('orden')
                .select()
            
            if (error) {
                setError(error)
            } else {
                setData(data)
            }
            }
            
            fetchData()
    }, [])

    return (
        <MiniDrawer>
            <Stack spacing={2}>
                <Typography variant="h5" >Orders </Typography>
                {data.length> 0 ?
                    <TableOrdens row={data} />
                    :
                    <p> no se encontraron datos</p>
                }
            </Stack>
        </MiniDrawer>
    )
}

export default page