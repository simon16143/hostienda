import React, {useEffect, useState} from 'react'



const PostTest = () => {
//peticion del token
const [data, setData] = useState([])
const [token, setToken] = useState("")
const urlPost = "https://accounts.zoho.eu/oauth/v2/token?refresh_token=1000.2e85c3c9c4d568e485f620b35403bc6f.d5652d764a999e4c1763325058efb2a2&client_id=1000.L10967VQ19WMBCP5CMHPC9DOJCAI9J&client_secret=eeba586124ab65019a8c46d74034ac5beda988943b&grant_type=refresh_token";
const urlGet = "Product-Catalog/report/Product_Details";
useEffect(()=>{ 
  const peticion = fetch(urlPost,{
    method: 'POST',
  });
  peticion
  .then((ans)=>{return ans.json()})
  .then((resp)=>{
    const reslt = resp.access_token;
    console.log(reslt)
    return fetch(urlGet,{
      method: "GET",
      headers:{'Authorization':`Zoho-oauthtoken ${reslt}` }})})
      .then((answer) => { return answer.json() })
      .then((resp) => {
        const result = resp.data
        setData(result)})
 
},[]) 


  return (
    <div>
     {data.map((product)=>(
     <p key={product.Product_ID}>
     {product.Product_Description}
     </p>
    ))}
    </div>
   

  )
}

export default PostTest  