import { useContext, useState } from 'react';
import './App.css';
import { Button, Col, Row, Container, Image } from 'react-bootstrap';
import IconButton from './components/IconButton';
import ProfileHeader from './components/ProfileHeader';
import { createContext } from 'react';
import { PROFILE_DATA } from './data';
import ImageGrid from './components/ImageGrid';
import Highlight from './components/Highlight';
import AddPostModal from "./components/AddPostModal";


export const ProfileContext = createContext(null);

function App() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      <Row>
        <Col
          sm={1}
          className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
          style={{ position: 'sticky', top: 0 }}
        >
          <IconButton className="bi bi-instagram" isTop />
          <IconButton className="bi bi-house" />
          <IconButton className="bi bi-search" />
          <IconButton className="bi bi-compass" />
          <IconButton className="bi bi-film" />
          <IconButton className="bi bi-chat" />
          <IconButton className="bi bi-heart" />
          <IconButton className="bi bi-plus-square" onClick={openModal}/>
          <IconButton imageSrc="https://sig1.co/logo-1" />
          <IconButton className="bi bi-list" isBottom />
        </Col>
        <Col sm={11}>
          <Container>
            <ProfileHeader />
            <Highlight />
            <ImageGrid />
            <AddPostModal show={showModal} handleClose={closeModal}/>
          </Container>
        </Col>
      </Row>
    </ProfileContext.Provider>
  );
}

export default App;
