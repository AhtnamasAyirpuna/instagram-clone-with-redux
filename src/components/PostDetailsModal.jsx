import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addComment } from "../features/posts/postsSlice";

export default function PostDetailsModal({ show, handleClose, postId }) {
  const post = useSelector((state) =>
    state.posts.find((p) => p.id === postId)
  );
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");

  if (!post) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      dispatch(addComment({ postId, text: commentText }));
      setCommentText("");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Post Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={post.image}
          alt="Post"
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <p>{post.description}</p>

        <h5>Comments</h5>
        <ul>
          {post.comments.map((c, idx) => (
            <li key={idx}>{c}</li>
          ))}
        </ul>

        <Form onSubmit={handleSubmit} className="d-flex">
          <Form.Control
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <Button type="submit" variant="primary" className="ms-2">
            Post
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
