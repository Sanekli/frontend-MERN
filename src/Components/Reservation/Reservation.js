import React, { useState } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Reservation } from "../../Redux/Actions/actions";
import "./reservation.css";
import { useNavigate } from "react-router-dom";

function ReservationForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [choose, setChoose] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    dispatch(
      Reservation(
        { email, lastName, phoneNumber, address, name, date, choose },
        navigate
      )
    );
  };

  return (
    <div className="reservation">
      <Container>
        <h1>Please Check Your Reservation</h1>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              placeholder=".. ... ..."
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridCity">
            <Form.Label>Address</Form.Label>
            <Form.Control onChange={(e) => setAddress(e.target.value)} />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Choose Your Appartement</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                onChange={(e) => setChoose(e.target.value)}
              >
                <option></option>
                <option>Dar Sabri</option>
                <option>Dar Rim</option>
                <option>Dar Selma</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Button
            onClick={() => Submit()}
            variant="primary"
            className="submit-btn"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ReservationForm;
