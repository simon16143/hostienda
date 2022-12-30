import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box } from '@mui/system';
import {AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar} from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

//Estilos para el header
const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"})
const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"30%"
}))
const Icons = styled(Box)(({theme})=>({
   display:"flex",
   alignItems:"center",
   gap:"10px",
    
}))


const FetchTest = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const[open,setOpen] = useState(false); 
  //Peticion a la API
  useEffect(()=>{
    const url = 'Product-Catalog/report/Product_Details';
    const token ="Zoho-oauthtoken 1000.2e9c0bfd2e66ead71a67cfc562040243.cdce1685675287fe32bb0373b4124314" 
    const peticion = fetch(url, {
        method: 'GET',
        headers: {'Authorization': token}
   });
   peticion
   .then((answer) => { return answer.json() })
   .then((resp) => {
         const result = resp.data
         setData(result)
                
     }) 
     .catch((e)=>{console.log(e)})
   
 },[]) 
return (
    <Box bgcolor="white" flex={4} p={2} align="center" > 
        <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h5">
                Hostienda
            </Typography>

        <Search>
            <InputBase fullWidth={true} placeholder='Buscar...' type="text"className='search'
            onChange={(e)=>setQuery(e.target.value)}/> 
        </Search>

        <Icons>
            <Badge badgeContent={2} color="error">
            <MailIcon/>
            </Badge>
            <Badge badgeContent={4} color="error">
             <NotificationsIcon/>
            </Badge>
            <Avatar sx={{width:30, height:30}} alt="Symon" src="https://alumnosunir-my.sharepoint.com/:i:/g/personal/simonjose_lopez136_comunidadunir_net/EVAFDh59zntBkOV1hwEV-80BJbEcGfdcEI3GvrfA2p1zPg?e=kUsPNX"
            onClick={e=>setOpen(true)}/>      
        </Icons> 

    </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e=>setOpen(false)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',}}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',}}>

            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
   
    <div align="center">
    <Card sx={{ maxWidth: 345 }}>

     {data.filter((item)=>item.Category.display_value.toLowerCase().includes(query.toLowerCase()))
     .map((product)=>(
     <p key={product.Product_ID}> 
      {product.Product_Name} 
     <img src= {"https://creator.zoho.eu" + product.Product_Images[0].display_value}></img><br/>
     <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
      {product.Category.display_value}
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
    </CardContent>   
     </p>
       ))}
  </Card>
  <br/>
  </div>
  </Box>
);
  }

export default FetchTest