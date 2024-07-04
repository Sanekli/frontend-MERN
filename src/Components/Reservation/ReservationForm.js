import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Reservation } from "../../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import "./reservation.css";

function ReservationForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    name: "",
    date: "",
    choose: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Reservation(formData, navigate));
  };

  return (
    <div className="reservation">
      <div className="reservation-form-container">
        <h1>Please Check Your Reservation</h1>
        <Form onSubmit={handleSubmit} className="reservation-form">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group controlId="formGridEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGridPhoneNumber" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phoneNumber"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress" className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridChoose">
              <Form.Label>Choose Your Appartement</Form.Label>
              <Form.Select
                name="choose"
                value={formData.choose}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option value="Dar Sabri">Dar Sabri</option>
                <option value="Dar Rim">Dar Rim</option>
                <option value="Dar Selma">Dar Selma</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className="submit-btn">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ReservationForm;
