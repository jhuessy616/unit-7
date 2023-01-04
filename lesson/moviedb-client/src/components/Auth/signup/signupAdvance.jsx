import React, { useState } from "react";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const SignupAdvance = (props) => {
    const [formData, setFormData] = useState({
        firstName: "",
      lastName: "",
      email: "",
        password:"",
    }
    )
    
    const handleChange=
        (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value.trim() })
        };
  
  function handleSubmit(e) {
      e.preventDefault();
      console.log(formData);
  }
  return (
    <>
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>First Name: </Label>
          <Input
            name="firstName"
           onChange={handleChange}
          />
        </FormGroup>

         <FormGroup>
          <Label>Last Name: </Label>
          <Input
            name="lastName"
            onChange={handleChange}
          />
        </FormGroup>
           <FormGroup>
          <Label>Email: </Label>
          <Input
            name="email"
            onChange={handleChange}
          />
        </FormGroup>

           <FormGroup>
          <Label>Password </Label>
          <Input
            name="password"
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" color="danger">
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default SignupAdvance;