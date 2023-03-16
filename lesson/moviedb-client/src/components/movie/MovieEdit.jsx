import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import FullWidthButton from "../Buttons/FullWidthButton";
import APIURL from "../../helper/environment";

const MovieEdit = (props) => {
    const { id } = useParams();
       const [formData, setFormData] = useState({
        movieTitle: "",
      movieDescription: "",
      movieYear: "",
           isCurrentlyInTheaters: "",
        rating:""
    }
    )
    const handleChange=
        (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value.trim() })
        };
    
  function handleSubmit(e) {
      e.preventDefault();
        let url = `http://localhost:4000/movie/update/${id}`;

    let bodyObj = JSON.stringify({
      movieTitle,
      movieDescription,
      movieYear,
      isCurrentlyInTheaters,
      rating,
    });

    let myHeaders = new Headers()
    myHeaders.append("Authorization", props.token)
    myHeaders.append("Content-Type", "application/json")

    const requestOptions = {
        headers: myHeaders,
        body: bodyObj,
        method: "PATCH"
    }

    try {
        
    } catch (error) {
        console.log(error)
    }
  
  }
  const fetchMovie = async () => {
    const url = `${APIURL}/movie/${id}`;
    let myHeaders = new Headers();
    myHeaders.append("Authorization", props.token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
        console.log(data);
        setFormData({ ...formData, [data]: data.movie })
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    if (props.token) {
      fetchMovie();
    }
  }, [props.token]);
  return (
    <>
      <Container>
        <Row>
          <Col md="4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              aspernatur voluptates dolor vitae beatae eum natus sed facere!
              Tempore, magni?
            </p>
          </Col>
          <Col md="8">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Movie Title</Label>
                <Input onChange={handleChange}
 name="movieTitle" />
              </FormGroup>
              <FormGroup>
                <Label>Movie Description</Label>
                <Input onChange={handleChange}
name= "movieDescription" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label>Movie Year</Label>
                <Input onChange={handleChange}
 name="movieYear" />
              </FormGroup>
              <FormGroup>
                <Label>Currently In Theaters</Label>
                <Input onChange={handleChange}
name="isCurrentlyInTheaters" type="select">
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Rating</Label>
                <Input onChange={handleChange}
name="rating" type="select">
                  <option value={5}>5</option>
                  <option value={4}>4</option>
                  <option value={3}>3</option>
                  <option value={2}>2</option>
                  <option value={1}>1</option>
                </Input>
              </FormGroup>
              <FullWidthButton>
                <Button>Update Movie</Button>
              </FullWidthButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieEdit;