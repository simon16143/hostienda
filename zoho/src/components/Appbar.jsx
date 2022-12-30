import {AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box } from "@mui/system";
import React, { useState } from 'react';




const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"})
const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}))
const Icons = styled(Box)(({theme})=>({
   display:"flex",
   alignItems:"center",
   gap:"20px",
    
}))
const Appbar = () => {
  const [query, setQuery] = useState("");
  const[open,setOpen] = useState(false);  
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h5">
            Hostienda
            </Typography>
            <Search>
                <input
                type="text"
                placeholder='Buscar...'
                className='search'
                onChange={(e)=>setQuery(e.target.value)}
                />
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
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Appbar