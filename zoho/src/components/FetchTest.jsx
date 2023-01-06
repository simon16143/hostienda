import React, { useState } from 'react';
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
    justifyContent:'center',
    borderRadius:theme.shape.borderRadius,
    width:"30%"
}))
const Icons = styled(Box)(({theme})=>({
   display:"flex",
   alignItems:"center",
   gap:"10px",
    
}))


const FetchTest = (props) => {
  //State para el filtro de la consulta
  const [query, setQuery] = useState("");
  //State para el modal del avatar
  const[open,setOpen] = useState(false);
  
return (
    <Box bgcolor="white" flex={4} p={2} align="center" > 
        <AppBar position="sticky">
       
        <StyledToolbar>
          <Typography variant="h5" >
           Catálogo
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
            
            <Avatar  sx={{width:30, height:30}} alt="Symon"
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
      {/*Filtro de categorías*/}
      {props.data.filter((item)=>item.Category.display_value.toLowerCase().includes(query.toLowerCase()))
      .map((product)=>(
        /*Key obligatorio*/ 
      <p key={product.Product_ID}> 
        <Typography fontSize={25} fontFamily='arial' color={"#52796f"}>{product.Product_Name}</Typography>
      <img src= {"https://creator.zoho.eu" + product.Product_Images[0].display_value}></img><br/>
      <CardContent>
        <Typography textAlign={"center"}>{product.Product_Description}</Typography>
        <Typography> Precio: € {product.Product_Value}<br/></Typography>
        <Typography> Categoría: {product.Category.display_value}</Typography>
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