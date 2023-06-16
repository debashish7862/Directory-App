import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
<>
<nav className="  bg-primary">
<div className="container-fluid bg-primary p-2">
<h4 className=" text-white text-center">Debashish's Directory App</h4>
</div>
</nav>
<div className='m-5'>
<Link className='btn btn-primary mx-3' to={"/addnewperson"}>Add New Person </Link>
<Link className='btn btn-secondary mx-3' to={"/retriveinformation"}>Retrive Information</Link>
</div>
</>
  )
}
