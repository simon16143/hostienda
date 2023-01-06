import './App.css';
import { Box, Stack } from '@mui/material';
import Home from './components/Home';
import React, {useState,useEffect} from 'react';



function App() {
  //Peticiones para el token y el archivo json
  const [data, setData] = useState([]);
  const urlPost = "https://accounts.zoho.eu/oauth/v2/token?refresh_token=1000.3dbdad6937dc0800c4dcc662cd14d173.86efb18e337989bebb3ff4c05582c94c&client_id=1000.NQL17JHK3Y62Y178TO0E3FQC6MBQJV&client_secret=5d04ad135862e7313377484af55efa1f41c1f49a39&grant_type=refresh_token";
  const urlGet = "Product-Catalog/report/Product_Details";
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
        headers:{'Authorization':`Zoho-oauthtoken ${reslt}` }})})
        .then((answer) => { return answer.json() })
        .then((resp) => {
          const result = resp.data
          setData(result)})
   
  },[]) 

  return (
    
      <Box>
        <Stack>
         <Home/>
        </Stack>
      </Box>
 
  )
}

export default App;
