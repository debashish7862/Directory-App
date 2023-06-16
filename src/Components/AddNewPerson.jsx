import React, { useEffect, useState } from 'react'

export default function AddNewPerson() {
  const[age,setAge]=useState(0)
  const[ageinput,setAgeinput]=useState()
  console.log(ageinput)
  const [rows, setRows] = useState([{
    userName: "",
    age: "",
    dob: "",
    uid: "",
    mobile: "",
   
  }]);

  const handleInputChange = (e,index) => {
    const { name, value } = e.target;
      // console.log(name, value);
      const updatedRows = [...rows];
      updatedRows[index][name] = value;
      setRows(updatedRows);
  };

    const handleSubmit = (e,index) => {
        e.preventDefault();
        rows.age=age;
        // console.log(rows);
        const row = rows[index];
        localStorage.setItem(row.uid,JSON.stringify(row))
    }

    const handleDelete = (e,index) => {
        e.preventDefault();
        const row = rows[index];
        const uid = row.uid;
        const updatedRows = rows.filter(row => row.uid != uid)
        setRows(updatedRows);
        localStorage.removeItem(row.uid);
    }
    const handleAddRow = () => {
        setRows([...rows, {
          userName: "",
          age: "",
          dob: "",
          uid: "",
          mobile: "",
         
        }]);
    }

  useEffect(()=>{

    var dob=new Date(ageinput)
    // console.log(dob)
    var monthDiff=Date.now()-dob.getTime();
    var ageDt=new Date(monthDiff)

    var year=ageDt.getUTCFullYear();
    var result=(Math.abs(year-1970));
    

    console.log(result)
    if(result>0){
      setAge(result)
      rows.map((e)=>{
        e.age=age;

      })
     
    }else{
      setAge(0)
    }
   

  },)
    






  return (
    <div className='border border-success m-5'>
        <div className=''>
        <h4 className='border border-5'>Add New Person</h4>
        </div>

        


        <div>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Date of birth</th>
      <th scope="col">Adhar Number</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Age</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {rows.map((row,index)=>(
    <tr key={index}>
      <th scope="row"> <input
                  type="text"
                  name="userName"
                  placeholder='First name Last name'
                  value={row.userName}
                  onChange={(e) => {
                    handleInputChange(e, index);
                  }}
                /></th>
      <td><input
                  type="date"
                  name="dob"
                  placeholder='dd/mm/yyyy'
                  
                  onChange={(e) => {
                    handleInputChange(e,index)
                    setAgeinput(e.target.value);
                    
                  }}
                /></td>
      <td>  <input
                  type="number"
                  name="uid"
                  placeholder='12 Digit UID number'
                  required
                  value={row.uid}
                  onChange={(e) => {
                    handleInputChange(e, index);
                    
                  }}
                /></td>
      <td> <input
                  type="number"
                  name="mobile"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder='10 Digit mobile number'
                  required
                  value={row.mobile}
                  onChange={(e) => {
                    handleInputChange(e, index);
                  }}
                /></td>
      <td> <input type="number" name='age' value={row.age} onChange={(e)=>{handleInputChange(e,index)}}/></td>
    
      <td>
      <button type="button" class="btn btn-success m-1" onClick={(e)=>handleSubmit(e, index)}>Add</button>
      <button type="button" class="btn btn-danger" onClick={(e) => handleDelete(e, index)}>Delete</button>
      </td>
    </tr>
    ))}
  </tbody>
</table>
<div className='d-flex justify-content-center m-2 '>
  <button className='btn btn-info text-white' onClick={handleAddRow}>Add Row</button>
  </div>





            
        </div>



        






    </div>
  )
}
