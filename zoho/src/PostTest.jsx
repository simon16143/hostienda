import React, {useEffect, useState} from 'react'



const PostTest = () => {
//peticion del token
const [token, setToken] = useState("")
const url1 = "https://accounts.zoho.eu/oauth/v2/token?refresh_token=1000.2e85c3c9c4d568e485f620b35403bc6f.d5652d764a999e4c1763325058efb2a2&client_id=1000.L10967VQ19WMBCP5CMHPC9DOJCAI9J&client_secret=eeba586124ab65019a8c46d74034ac5beda988943b&grant_type=refresh_token";
useEffect(()=>{ 
   const apiQuery = async()=>{
   const response = await fetch(url1,{
    method:'POST',
  })
  const result = await response.json();
  setToken(result.access_token);
};
 apiQuery();
},[])
useEffect(()=>{ 
  fetch(url, {
  method: "GET",
  headers: {'Authorization': x}})
.then((answer) => { return answer.json() })
.then((resp) => {
   const result = resp.data
   setData(result)})
 
},[]) 


  return (
    <div>
      {token}
    </div>
   

  )
}

export default PostTest  