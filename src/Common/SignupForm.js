import { setAccessToken } from "@/Redux/Reducers/authSlice";
import { setuser } from "@/Redux/Reducers/authSlice";
import { withoutAuthAxios } from "@/config";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
const SignupForm = () => {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    //password:'',
    position: "",
    instagram_name: "",
    organization: "",
    insterested_status: "",
    invited_owner: "",
    dob: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("data", data);

    /*
      const payload=data
       await withoutAuthAxios()
       .post(`/api/login`,payload)
       .then((response)=>{
        console.log("dsd",response.data.user)
        dispatch(setuser(response.data.user))
        dispatch(setAccessToken(response.data.token))
       
       }).catch((error)=>{
        console.log("dsd",error)
       })    */
  };

  return (
    <Form>
      {/*  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={data.password} onChange={handleChange} name="password" />
      </Form.Group>
      */}
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          value={data.fname}
          onChange={handleChange}
          name="fname"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name </Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          value={data.lname}
          onChange={handleChange}
          name="lname"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Organization</Form.Label>
        <Form.Control
          type="text"
          placeholder="Organization"
          value={data.organization}
          onChange={handleChange}
          name="organization"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="number"
          placeholder="999999999"
          value={data.phone}
          onChange={handleChange}
          name="phone"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date of Birth</Form.Label>

       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
          name="email"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Position in Industry- </Form.Label>
        <br />

        <select value={data.position} name="position" onChange={handleChange}>
          <option value="">Select position</option>
          <option value="1">Store owner</option>
          <option value="2">Brand owner</option>
          <option value="3">Budtender</option>
          <option value="4">Buyer</option>
          <option value="5">Exec/Management</option>
          <option value="6">Sales Rep</option>
          <option value="7">Brand Ambassador</option>
          <option value="8">Influencer/Content Creator</option>
          <option value="9">Other</option>
        </select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>What is your Instagram handle? </Form.Label>
        <Form.Control
          placeholder="Instagram name"
          value={data.instagram_name}
          onChange={handleChange}
          name="instagram_name"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Are you Interested in creating content with </Form.Label>
        <br />{" "}
        <input
          type="checkbox"
          checked={data.insterested_status === "1"}
          value="1"
          name="insterested_status"
          onChange={handleChange}
        />{" "}
        Yes
        <input
          type="checkbox"
          checked={data.insterested_status === "0"}
          value="0"
          name="insterested_status"
          onChange={handleChange}
        />{" "}
        No
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Who invited you? </Form.Label>
        <Form.Control
          placeholder="Who invited you?"
          value={data.invited_owner}
          onChange={handleChange}
          name="invited_owner"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Button
        style={{ textAlign: "center" }}
        onClick={handleSubmit}
        variant="success"
      >
        Submit
      </Button>
    </Form>
  );
};

export default SignupForm;
