import React, {useEffect} from 'react'

const Filter = ({setActive, active, setFiltered, data,query}) => {
    useEffect(()=>{
        if(active==="products"){
            setFiltered(data);
            return;
        }
        const filtered = data.filter((item)=>{
            return item.Category.display_value.includes(active)
        });
       
        setFiltered(filtered)
    },[active])
    return (
    <div className="filter-container">
    
        <button className={active === "products" ? "active" : ""} onClick={()=>setActive("products")}>Todos</button>
        <button className={active === "Hogar" ? "active" : ""} onClick={()=>setActive("Hogar")}>Hogar</button>
        <button className={active === "Tecnologia" ? "active" : ""} onClick={()=>setActive("Tecnologia")}>Tecnologia</button>
        <button className={active === "Moda" ? "active" : ""} onClick={()=>setActive("Moda")}>Moda</button>
        
    </div>
  )
}

export default Filter