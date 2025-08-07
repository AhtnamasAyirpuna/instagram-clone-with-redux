import { useContext, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { ProfileContext } from '../App';
import { useSelector } from 'react-redux';
import UpdatePostModal from './UpdatePostModal';


export default function ImageGrid() {
  const posts = useSelector((state) => state.posts);
  const [show, setShow] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const handleClose = () => {
    setCurrentPost(null);
    setShow(false);
  };
  const handleShow = (post) => {
    setCurrentPost(post);
    setShow(true);
  }

  const renderImages = () => {
    return posts.map((post) => (
      <Col md={4} key={post.id} className="mb-4">
        <Image src={post.image} fluid />
      </Col>
    ));
  };

  return <Row>{renderImages()}</Row>;
}
