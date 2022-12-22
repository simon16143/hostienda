import React,{useState,useEffect} from 'react'

const Fetch = () => {
  const url = 'sample/report/staff_details_Report';  
  const token = 'Zoho-oauthtoken 1000.361d0ff3e0f556f84322a8a2b3707737.ffe1dd9822f20808d1bdfebd8bbf3a27'
  const[users, setUsers] = useState([])  
  useEffect(()=>{
    const load = async()=>{
    const response =  await fetch(url,{
    method: 'GET',
    headers: {
      'Authorization': token,
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