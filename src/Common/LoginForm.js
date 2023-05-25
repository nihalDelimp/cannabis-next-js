import { setAccessToken } from '@/Redux/Reducers/authSlice';
import { setuser } from '@/Redux/Reducers/authSlice';
import { withoutAuthAxios } from '@/config';
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
const LoginForm = () => {

    const [data, setdata] = useState({
      email:"",
      password:''
    }) 

    const handleChange=(e)=>{
      const { name, value } = e.target;
      
      setdata((prev)=>({
        ...prev,
        [name]:value
      }))
      
    }

    const dispatch=useDispatch()
  
  
  const handleSubmit=async(e)=>{
      e.preventDefault()
        
      const payload=data
       await withoutAuthAxios()
       .post(`/api/login`,payload)
       .then((response)=>{
        console.log("sd",response)
           if(response.data.status=="1"){
          toast.success("You are logged in successfully");
          dispatch(setuser(response.data.user))
          dispatch(setAccessToken(response.data.token))  
        }else{
          toast.error(response.data.message)
        }
       },(error)=>{
        console.log(error)
        toast.error(error.response.data.message)     
       }).catch((error)=>{
        console.log("dsd",error)
       })    
       
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={data.email} onChange={handleChange} name="email"    />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={data.password} onChange={handleChange} name="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button onClick={handleSubmit}  variant="primary" >
        Submit
      </Button>
    </Form>
  )
}

export default LoginForm