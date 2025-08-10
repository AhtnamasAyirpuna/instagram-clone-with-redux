import { useContext, useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { ProfileContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import UpdatePostModal from './UpdatePostModal';
import { deletePost, recordLikes } from '../features/posts/postsSlice';

export default function ImageGrid() {
  const posts = useSelector((state) => state.posts);
  const [show, setShow] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    setCurrentPost(null);
    setShow(false);
  };
  const handleShow = (post) => {
    setCurrentPost(post);
    setShow(true);
  }
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?")
    if (confirmDelete) {
    dispatch(deletePost(id));
   }
  };

  const renderImages = () => {
    return posts.map((post) => (
      <Col md={4} key={post.id} className="mb-4">
        <Image src={post.image} fluid />
        <div>{post.likes} likes</div>
        <Button onClick={() => dispatch(recordLikes(post.id))} variant="outline-success">
          <i class="bi bi-hand-thumbs-up"></i>
        </Button>
        <Button onClick={() => handleShow(post)} variant="outline-primary">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button onClick={() => handleDelete(post.id)} variant="outline-danger">
          <i className="bi bi-trash"></i>
        </Button>
      </Col>
    ));
  };

  return (
    <>
      <Row>{renderImages()}</Row>
      {currentPost && (
        <UpdatePostModal 
          show={show}
          handleClose={handleClose}
          postId={currentPost.id}
        />
      )}
    </>
  )
}
