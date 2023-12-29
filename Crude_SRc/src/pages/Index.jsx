import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Index() {

// Data Show mate
useEffect(()=>{
    fetch();
},[])

const[data,setData]=useState([]);

const fetch=async()=>{
  const res=await axios.get(`http://localhost:3000/user`)
  setData(res.data)
}


// Add Data mate
const[formValue,setformValue]=useState({
  name:"",
  email:"",
  password:"",
  msg:""
})


const onchange=(e)=>{
  setformValue({...formValue,id:new Date().getTime().toString(),[e.target.name]:e.target.value})
  console.log(formValue)
}
    function Validetion () 
    {
      var result=true;
      if (formValue.name=="") 
      {
          alert("Name is Required")
          result=false
      }
      if (formValue.email=="") 
      {
          alert("Email is Required")
          result=false
      }
      if (formValue.password=="") 
      {
          alert("password is Required")
          result=false
      }
      
      if (formValue.msg=="") 
      {
          alert("Massage is Required")
          result=false
      }

      return result
      
    }

  const onsubmit=async(e)=>{
      e.preventDefault();
      if (Validetion()) 
      {
          const res=await axios.post(`http://localhost:3000/user`,formValue)

          if (res.status==201) 
          {
              alert("Data Added Successfully")
              setformValue({...formValue,name:"",email:"",password:"",msg:""})  
              fetch()
          }
      }
  }


  // Delet Mate
  const ondelet=async(id)=>{
      const res=await axios.delete(`http://localhost:3000/user/${id}`)
      if (res.status==200) 
      { 
        alert("Data Delet Successfully")
        fetch()
        
      }
  }


  // Edit mate
  const [editFormValue, setEditFormValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
    
  const [editID, setEditID] = useState("");
  // form ma data mate
    const edit=async(id)=>{
          const res=await axios.get(`http://localhost:3000/user/${id}`)
          setEditFormValue(res.data)
          setEditID(id);
    }

      // form ma data mate
    const onupdate=(e)=>{
      setEditFormValue({...editFormValue,[e.target.name]:e.target.value})
        console.log(editFormValue)
    }
    function Validetion2 () 
    {
      var result=true;
      if (editFormValue.name=="") 
      {
          alert("Name is Required")
          result=false
      }
      if (editFormValue.email=="") 
      {
          alert("Email is Required")
          result=false
      }
      if (editFormValue.password=="") 
      {
          alert("password is Required")
          result=false
      }
      
      if (editFormValue.msg=="") 
      {
          alert("Massage is Required")
          result=false
      }

      return result
      
    }



    // onupdate mate
 
    const onsave=async(e)=>{
      e.preventDefault();
      if (Validetion2()) 
      {
        const res=await axios.patch(`http://localhost:3000/user/${editID}`,editFormValue);
        if (res.status==200) 
        {
            alert("Data Update Successfully")
            setEditFormValue({editFormValue,name:"",email:"",password:"",msg:""})
            fetch()
        }
      }
    }

  return (
    // Add Data
    <div className='container'>
        <div className='container mt-5'>
<form action="/action_page.php">

  <div className="mb-3 mt-3">
    <label  className="form-label">Name:</label>
    <input type="text" value={formValue.name} onChange={onchange} className="form-control"  placeholder="Enter Name" name="name" />
  </div>


  <div className="mb-3">
    <label  className="form-label">Email:</label>
    <input type="email" value={formValue.email} onChange={onchange} className="form-control"  placeholder="Enter Email" name="email" />
  </div>

  

  <div className="mb-3">
    <label  className="form-label">Password:</label>
    <input type="text" className="form-control" value={formValue.password} onChange={onchange}  placeholder="Enter Password" name="password" />
  </div>
 

  <div className="mb-3">
    <label  className="form-label">Massage:</label>
    <input type="text" className="form-control" value={formValue.msg} onChange={onchange} placeholder="Enter Massage" name="msg" />
  </div>

  <button type="submit" className="btn btn-primary mt-3" onClick={onsubmit}>Submit</button>
</form>



{/* Manage Data */}


<div class="container mt-5">
  <h2>Manage Data</h2>
             
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Massage</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    
    {
      data.map((value)=>{
        return(
            <tr>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
              <td>{value.msg}</td>
              <td>
       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>edit(value.id)}>
  Edit
</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-danger' onClick={()=>ondelet(value.id)}>Delete</button>
              </td>
            </tr>
        )
      })
    }
      
    </tbody>
  </table>
</div>

</div>

{/* Modal */}
{/* <!-- The Modal --> */}
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      {/* <!-- Modal Header --> */}
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
{/* Form */}

<div className='container'>
<form action="/action_page.php">

  <div className="mb-3 mt-3">
    <label  className="form-label">Name:</label>
    <input type="text" value={editFormValue.name} onChange={onupdate} className="form-control"  placeholder="Enter Name" name="name" />
  </div>


  <div className="mb-3">
    <label  className="form-label">Email:</label>
    <input type="email" value={editFormValue.email} onChange={onupdate}  className="form-control"  placeholder="Enter Email" name="email" />
  </div>

  

  <div className="mb-3">
    <label  className="form-label">Password:</label>
    <input type="text" className="form-control" value={editFormValue.password}  onChange={onupdate}  placeholder="Enter Password" name="password" />
  </div>
 

  <div className="mb-3">
    <label  className="form-label">Massage:</label>
    <input type="text" className="form-control" value={editFormValue.msg} onChange={onupdate} placeholder="Enter Massage" name="msg" />
  </div>

</form>

</div>
    
      {/* <!-- Modal footer --> */}
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={onsave}>Save</button>
      </div>

    </div>
  </div>
</div>


    </div>
  )
}

export default Index