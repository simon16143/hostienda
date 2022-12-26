import React, { Fragment } from 'react';
import { useEffect,useState } from 'react';

const Fetch = () => {
 //const [img, setImg] = useState("")
 const [data, setData] = useState([])

 useEffect(()=>{
   const url = 'Product-Catalog/report/Product_Details';
   const token = 'Zoho-oauthtoken 1000.708274cb98f08f8d92ba0c8604f279e3.49ededf72edc2f78d500a760e34d8713'  
   const peticion = fetch(url, {
       method: 'GET',
       headers: {'Authorization': token}
  });
  peticion
  .then((answer) => { return answer.json() })
  .then((resp) => {
      resp.data.forEach((product)=>{
        setData(<div key={product.ID}>
          <div>{product.Company_Name } - { product.Product_Name}</div>
        </div>)
        console.log(data)
      })
  
    })
    .catch((e)=>{console.log(e)})
},[])  

  return (
    <Fragment>
       <h1>Item</h1>
      <br/>
    
       <div>{data}</div>
      
    </Fragment>
  )

}

export default Fetch