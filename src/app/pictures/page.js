'use client'
import MiniDrawer from "@/components/pageDrawer"
import { Add } from "@mui/icons-material"
import { Box, Button, Icon } from "@mui/material"
import { useEffect, useState } from "react"
import { supabase } from "../supabase/configSupabase"

const pictures = () => {
    const [ selected, setSelected ] = useState();
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        fetchImages();
    }, [uploading])
    
    const oneClick = number =>{
        setSelected(number)
    }

    const handleFile = async (event) => {
        setImage(event.target.files[0]);
    };

    const uploadImage = async () => {
        if (!image) return;
    
        setUploading(true);
    
        const fileExt = image.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;
    
        let { error } = await supabase.storage
            .from('Pictures')
            .upload(filePath, image);
        
        if (error) {
            console.error('Error uploading image:', error.message);
        } else {
            console.log('Image uploaded successfully');
        }
        
        setUploading(false);
    };

    const fetchImages = async () => {
        const { data, error } = await supabase
            .storage
            .from('Pictures')
            .list('');
    
            if (error) {
                console.error('Error listing images:', error.message);
                return;
            }
    
            const urls = await Promise.all(
                data.map(async (file) => {
                    const publicUrl = await await supabase.storage.from('Pictures').getPublicUrl(file.name);
                    return publicUrl;
                })
                
            );
    
            setPictures(urls);
    };
    
    

    const BoxImage = (props ) => {
        if(props.number === selected){
            return ( <Box 
                        key={props.number} 
                        height={150}
                        width={150}
                        sx= {{ m: 2, border: '2px solid #e3026f'}}
                    >
                        <Button 
                            style={{width:'100%', height:'100%'}} 
                            onClick={()=> oneClick(props.number) }
                            >
                            <img style={{width:'100%', height:'100%'}} src={props.index.data.publicUrl} />
                        </Button>
                    </Box>    
            )
        }else{
            return <Box 
            key={props.number} 
            height={150}
            width={150}
            sx= {{ m: 2, border: '2px solid gray'}}
        >
            <Button 
                style={{width:'100%', height:'100%'}} 
                onClick={()=> oneClick(props.number) }
                >
                <img style={{width:'100%', height:'100%'}} src={props.index.data.publicUrl} />
            </Button>
        </Box>    
        }
    }

    return (
        <MiniDrawer>
            <Box 
                key={'Boximagenes'} 
                sx={{ display: "flex", flexWrap: "wrap" }}
                height={'100hv'}
                width={'100%'}
            >
                <Box
                    key={'image'} 
                    height={150}
                    width={150}
                    sx={{ m: 2, border: '2px solid grey' }}
                    >
                        <label >
                            <input
                                name="urlImage"
                                style={{ display: "none" }}
                                accept="image/png, image/jpg"
                                type="file"
                                onChange={handleFile}
                            />
                            <Icon style={{width:'100%', height:'100%', alignItems:'center', alignContent:'center'}} >
                                <Add/>
                            </Icon>
                        </label>
                        <Button onClick={uploadImage}>Enviar</Button>                        
                    </Box>
                {pictures.map((index, number)=> 
                    <BoxImage number={number} index={index} />
                )}
                
            </Box>
        </MiniDrawer>
    )
}

export default pictures