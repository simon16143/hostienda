import React,{useState,useEffect} from 'react'

const Fetch = () => {
  const url = "https://creator.zoho.eu/api/v2/skyler/sample/report/staff_details_Report";  
  const[users, setUsers] = useState([])  
  useEffect(()=>{
    const load = async()=>{
    const response =  await fetch(url,{
    mode: 'cors',    
    method: 'GET',
    headers: {
      Authorization: 'Zoho-oauthtoken 1000.546b9b9d6195f487baa15c97c40d0188.c3848a6542f8604ca980ac31595470d5',
     'Access-Control-Allow-Origin': '*',
    }})
    const data = await response.json()
    setUsers(data)   
    console.log(data)

    }
   load()   
  },[])
  return (
    <></>
  )
}

export default Fetch