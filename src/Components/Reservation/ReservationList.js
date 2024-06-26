import React, { useEffect } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getReservation, deleteReservation } from "../../Redux/Actions/actions";
import "./reservation.css";

const ReservationList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservation());
  }, [dispatch]);

  const reservations = useSelector((state) => state.Reducers.getReservation);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      dispatch(deleteReservation(id));
    }
  };

  return (
    <div className="cart">
      {reservations?.map((oneReservation) => (
        <Card
          className="cart-reservation"
          style={{ width: "18rem" }}
          key={oneReservation._id}
        >
          <Card.Header>Reservation Card</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Dar: {oneReservation.choose}</ListGroup.Item>
            <ListGroup.Item>Name: {oneReservation.name}</ListGroup.Item>
            <ListGroup.Item>
              Last Name: {oneReservation.lastName}
            </ListGroup.Item>
            <ListGroup.Item>Email: {oneReservation.email}</ListGroup.Item>
            <ListGroup.Item>
              Phone Number: {oneReservation.phoneNumber}
            </ListGroup.Item>
            <ListGroup.Item>Date: {oneReservation.date}</ListGroup.Item>
            <ListGroup.Item>Address: {oneReservation.address}</ListGroup.Item>
            <ListGroup.Item>
              <Button
                variant="danger"
                onClick={() => handleDelete(oneReservation._id)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
};

export default ReservationList;
