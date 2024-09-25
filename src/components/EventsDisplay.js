import React, { useState } from 'react';
import GlobalStyle from '../styles/globalStyles';
import EventCard from './EventCard';
import EventModal from './EventModal';
import CarouselComponent from './CarouselComponent';
import { Container, Row, Col } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

// Utility function to format date
const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};

// Events data
const events = [
  {
    name: 'FrameworkX',
    association: 'Computer Society of India and IE Student Chapter',
    department: 'Computer Science and Engineering',
    image: './assets/images/frameworkx.jpg',
    guideline: 'Detailed guidelines here.',
    timing: '10:00 AM - 4:00 PM',
    venue: 'IG4 Halls',
    date: '2024-10-10',
    description: 'FrameworkX is a comprehensive workshop that covers the latest frameworks in the industry. Join us to learn and network with experts.',
    registrationLink: 'http://example.com/register',
  },
  {
    name: 'Oops Olympiad',
    association: 'Computer Science and Engineering Association',
    department: 'Computer Science and Engineering',
    image: './assets/images/oopsolympiad.jpg',
    guideline: 'Bring your best artworks.',
    timing: '12:00 PM - 5:00 PM',
    venue: 'Seminar Hall',
    date: '2024-10-12',
    description: 'Participate in the Oops Olympiad to showcase your creative skills. This event is open to all with a passion for design and innovation.',
    registrationLink: 'http://example.com/register',
  },
  {
    name: 'Debug At First Sight',
    association: 'Computer Society of India',
    department: 'Computer Science and Engineering',
    image: './assets/images/debugatfirstsight.jpg',
    guideline: 'Find the flaw, fix the code, repeat.',
    timing: '9:00 AM - 3:00 PM',
    venue: 'IG3 Hall',
    date: '2024-10-15',
    description: 'A coding challenge where participants debug code under time constraints. Ideal for honing problem-solving skills and coding efficiency.',
    registrationLink: 'http://example.com/register',
  },
  {
    name: 'Resume Building Workshop',
    association: 'IEEE Computer Society Students Branch',
    department: 'Computer Science and Engineering',
    image: './assets/images/resumebuildingworkshop.jpg',
    guideline: 'Join us for a musical extravaganza.',
    timing: '4:00 PM - 10:00 PM',
    venue: 'IG3 Hall',
    date: '2024-10-20',
    description: 'Enhance your resume with expert tips and personalized feedback. Perfect for students preparing for job interviews.',
    registrationLink: 'http://example.com/register',
  },
  {
    name: 'September Monthly Contest',
    association: 'Coders Club',
    department: 'Computer Science and Engineering',
    image: './assets/images/septembermonthlycodingcontest.jpg',
    guideline: 'Connect with industry leaders.',
    timing: '10:00 AM - 6:00 PM',
    venue: 'B2 Hall',
    date: '2024-10-25',
    description: 'A monthly coding contest featuring challenging problems and opportunities to connect with professionals in the field.',
    registrationLink: 'http://example.com/register',
  },
  {
    name: 'Tech Hunt',
    association: 'Computer Science and Engineering Association',
    department: 'Computer Science and Engineering',
    image: './assets/images/techhuntposter.jpg',
    guideline: 'Share your literary works.',
    timing: '2:00 PM - 6:00 PM',
    venue: 'Online',
    date: '2024-10-30',
    description: 'An online scavenger hunt with tech-related challenges and prizes. Ideal for tech enthusiasts looking for a fun and interactive experience.',
    registrationLink: 'http://example.com/register',
  },
];

// Example images for CarouselComponent
const carouselImages = [
  { src: './assets/images/augccwinners.jpg', caption: 'Winners of August Monthly Coding Contest' },
  { src: './assets/images/codingcontestwinners.jpg', caption: 'Winners of September Coding Contest' },
  { src: './assets/images/dafswinners.jpg', caption: 'Winners of Debug At First Sight' },
  { src: './assets/images/oowinners.jpg', caption: 'Winners of Oops Olympiad' },
];

// Styled container for the carousel
const CarouselContainer = styled.div`
  width: 80%; /* Adjust the width of the carousel */
  margin: 2rem auto; /* Center the carousel and add margins */
  position: relative;
`;

// Styled container for the title
const TitleContainer = styled.div`
  color: #ffffff;
  text-align: center;
  margin: 2rem 0;
  font-size: 2rem;
`;

const EventsDisplay = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleShowDetails = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <GlobalStyle />
      <CarouselContainer>
        <CarouselComponent images={carouselImages} />
      </CarouselContainer>
      <Container>
        <TitleContainer>
          <Typewriter
            options={{
              strings: ['Check out the recent Events!'],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </TitleContainer>
        <Row>
          {events.map((event, index) => (
            <Col key={index} xs={12}>
              <EventCard
                event={{
                  ...event,
                  date: formatDate(event.date),
                }}
                onShowDetails={handleShowDetails}
                reverse={index % 2 === 1}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <EventModal show={showModal} event={selectedEvent} onHide={handleCloseModal} />
    </>
  );
};

export default EventsDisplay;
