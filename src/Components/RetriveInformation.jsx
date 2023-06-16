import React, { useState } from 'react'

export default function RetriveInformation() {
  const[search,setSearch]=useState('')
  const[user,setUser]=useState({})

const handleData=()=>{
  const data=JSON.parse(localStorage.getItem(search));
  console.log(data);
  setUser(data)
}
  return (
    <div className='border border-success m-5'>
       <div>
        <h4 className='border border-5'>Retrive Information</h4>
        </div>
        
        <div className='navbar-light bg-light d-flex justify-content-center'>
        
         <input className='mr-sm-2  p-2 w-5 col-sm-3' type="number" placeholder='Enter Adhar Number' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button className='btn btn-outline-success my-2 my-sm-0 m-2 p-2'  onClick={handleData}>Search</button>
  
        </div>

 

       
        {
            user ? (
                <div className='d-flex flex-column'>
                    {
                        Object.keys(user).map(key=>(
                          <>
                            <p className='m-2'>{key} :{user[key]}</p>
                            </>
                        ))
                    }
                    </div>
            ):(<h1>No Data Found</h1>)

        }
    </div>
  )
}
