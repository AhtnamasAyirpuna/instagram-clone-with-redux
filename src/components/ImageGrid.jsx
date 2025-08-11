import { useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import UpdatePostModal from './UpdatePostModal';
import { deletePost, recordLikes } from '../features/posts/postsSlice';
import PostDetailsModal from './PostDetailsModal';

export default function ImageGrid() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  //state for edit modal
  const [showEdit, setShowEdit] = useState(false);
  const [editPostId, setEditPostId] = useState(null);

  //state for details modal 
  const [showDetails, setShowDetails] = useState(false);
  const [detailsPostId, setDetailsPostId] = useState(null);

  const handleClose = () => {
    setEditPostId(null);
    setShowEdit(false);
  };

  const handleShow = (postId) => {
    setEditPostId(postId);
    setShowEdit(true);
  }

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?")
    if (confirmDelete) {
    dispatch(deletePost(id));
   }
  };

  const handleOpenDetails = (postId) => {
    setDetailsPostId(postId);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setDetailsPostId(null);
    setShowDetails(false);
  };

  const renderImages = () => {
    return posts.map((post) => (
      <Col md={4} key={post.id} className="mb-4">
        <Image src={post.image} fluid style={{cursor: 'pointer'}} onClick={() => handleOpenDetails(post.id)}/>
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
      {editPostId && (
        <UpdatePostModal 
          show={showEdit}
          handleClose={handleClose}
          postId={editPostId}
        />
      )}

      {detailsPostId && (
        <PostDetailsModal 
          show={showDetails}
          handleClose={handleCloseDetails}
          postId={detailsPostId}
        />
      )}
    </>
  )
}
