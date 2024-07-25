'use client'
import MiniDrawer from "@/components/pageDrawer"
import { usePathname } from "next/navigation"
import { supabase } from "../supabase/configSupabase"
import { useEffect, useState } from "react"
import { Stack, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import TableOrdens from "@/components/tableOrder"



const page = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState('all');
    const [fullData, setFullData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('orden')
                .select()
            
            if (error) {
                setError(error)
            } else {
                setData(data)
                setFullData(data)
            }
        }
            
            fetchData()
    }, [])

    const handleChange =async (event) => {
        setValue(event.target.value);
        await setData([]);
    
        if (event.target.value === "all") {
            console.log('todos')

            setData(fullData);
        } else if (event.target.value === "true") {
            console.log('aceptados')
            const data = fullData;

            const newData = data.filter(function (item) {
                const verifica = item.Status + "";
                return verifica.indexOf(event.target.value) > -1;
            });
            setData(newData);

        } else if (event.target.value === "false") {
            console.log('fallido')

            const data = fullData;
            const newData = data.filter(function (item) {
                const verifica = item.Status + "";
                return verifica.indexOf(event.target.value) > -1;
            });
        
            setData(newData);
        }

    };

    return (
        <MiniDrawer>
            <Stack spacing={2}>
                <Typography variant="h5" >Orders </Typography>
                {data.length === 0 ?
                    
                    <p> no se encontraron datos</p>
                    :
                    <>
                        <Stack direction={'row'} spacing={2}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                                >
                                <FormControlLabel value="all" control={<Radio />} label="Todos" />
                                <FormControlLabel
                                    value="true"
                                    control={<Radio />}
                                    label="Aceptados"
                                />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio />}
                                    label="Rechazados"
                                />
                        </RadioGroup>
                        </Stack>
                        <TableOrdens row={data} />
                    </>
                    
                }
            </Stack>
        </MiniDrawer>
    )
}

export default page