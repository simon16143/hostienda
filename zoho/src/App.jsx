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
  useEffect(()=>{ 
    const peticion = fetch("http://localhost:4000")
    peticion
    .then(res => res.json())
    .then(data =>{
          const result = data.data
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
