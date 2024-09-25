import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

// Styled components for the modal
const StyledModal = styled(Modal)`
  .modal-dialog {
    max-width: 80%;
    margin: 1.75rem auto;
  }

  .modal-content {
    background: rgba(255, 255, 255, 0.3); /* Increased opacity for the background */
    border: none;
    border-radius: 20px;
    backdrop-filter: blur(10px); /* Frosted glass effect */
    color: white;
  }
`;

const ModalContent = styled.div`
  padding: 2rem;
  color: white;
`;

const EventName = styled.h5`
  margin: 0;
  font-size: 2rem;
`;

const EventDetails = styled.p`
  margin: 1rem 0;
`;

const EventLink = styled.a`
  color: #5e60ce;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CloseButton = styled(Button)`
  background-color: #5e60ce; /* Matching button color */
  color: white;
  border: 2px solid #5e60ce;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  text-transform: uppercase;

  &:hover {
    background-color: #4c51a0;
    border-color: #4c51a0;
  }
`;

const EventModal = ({ show, onHide, event }) => {
  if (!event) return null;

  return (
    <StyledModal show={show} onHide={onHide} centered>
      <ModalContent>
        <Modal.Header closeButton>
          <Modal.Title>
            <EventName>{event.name}</EventName>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventDetails>
            <strong>Association:</strong> {event.association}<br />
            <strong>Department:</strong> {event.department}<br />
            <strong>Date:</strong> {event.date}<br />
            <strong>Timing:</strong> {event.timing}<br />
            <strong>Venue:</strong> {event.venue}<br /><br />
            <strong>Description:</strong> {event.description}<br />
            <strong>Guideline:</strong> {event.guideline}
          </EventDetails>
          <EventLink href={event.registrationLink} target="_blank" rel="noopener noreferrer">
            Register here
          </EventLink>
        </Modal.Body>
        <Modal.Footer>
          <CloseButton onClick={onHide}>
            Close
          </CloseButton>
        </Modal.Footer>
      </ModalContent>
    </StyledModal>
  );
};

export default EventModal;
