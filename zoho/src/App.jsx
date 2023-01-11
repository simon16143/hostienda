import {AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box} from "@mui/system";
import React, { useState,useEffect } from 'react';
import Filter from "./components/Filter";
import Product from "./components/Product"
import {motion, AnimatePresence} from "framer-motion";
import "./App.css";


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
function App() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const[open,setOpen] = useState(false);
  const [active, setActive] = useState("");
   //Peticiones para el token y el archivo json
  const [data, setData] = useState([]);
  const urlPost = "https://accounts.zoho.eu/oauth/v2/token?refresh_token=1000.3dbdad6937dc0800c4dcc662cd14d173.86efb18e337989bebb3ff4c05582c94c&client_id=1000.NQL17JHK3Y62Y178TO0E3FQC6MBQJV&client_secret=5d04ad135862e7313377484af55efa1f41c1f49a39&grant_type=refresh_token";
  const urlGet = "https://creator.zoho.eu/api/v2/hostienda1/Product-Catalog/report/Product_Details";
  useEffect(()=>{ 
    const peticion = fetch(urlPost,{
      method: 'POST',
    });
    peticion
    .then((ans)=>{return ans.json()})
    .then((resp)=>{
      const reslt = resp.access_token;
      return fetch(urlGet,{
        method: "GET",
        headers:{
            'Authorization':`Zoho-oauthtoken ${reslt}`,
           }}
         )})
        .then((answer) => { return answer.json() })
        .then((resp) => {
          const result = resp.data
          setData(result)
          setFiltered(result)
        }) 
  },[])   
  return (
     <div>
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h5">
            Catálogo
            </Typography>
            <Search>
                <InputBase
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

                <Avatar sx={{width:30, height:30}} alt="Symon" src=""
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

      <div className="App">
        <Filter data={data} setFiltered={setFiltered} active={active} setActive={setActive} query={query}/>
        <motion.div layout className="popular-item">
          <AnimatePresence>
          {filtered.map((product)=>{
            return <Product key={product.Product_ID} product={product}/>
          })}
          </AnimatePresence>
        </motion.div>
      </div>
   </div>
  
  );
}

export default App;
