import React from 'react';
import {motion} from "framer-motion";

const Product = ({product}) => {
  return (
    <motion.div 
    layout
    animate={{ opacity: 1 }} 
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{duration:0.2}}
    > 
       <div className="title">
          <h2>{ product.Product_Name }</h2>
        </div>
        <div className="img">
          <img src={"https://creator.zoho.eu" + product.Product_Images[0].display_value + product.backdrop_path} alt=""/>
        </div>
        
    </motion.div>
  
  )
}

export default Product