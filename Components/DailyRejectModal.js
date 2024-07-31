// MyModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class DailyRejectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      documentID: JSON.stringify(props.documentID),
    };
  }

  componentDidMount() {
    // alert(
    //   "Doc ID" + this.state.documentID + " comment: " + this.state.comments
    // );
  }

  handleCommentUpdate = (e) => {
    this.setState({ comments: e.target.value });
    //console.log(this.state.comments);
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        style={{ height: "80vh" }}
        dialogClassName="modal-100w"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Reject Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group> */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Please provide a reason for rejection.</Form.Label>
              <Form.Control
                as="textarea"
                rows={13}
                onChange={this.handleCommentUpdate}
              />
            </Form.Group>
          </Form>
          <div className="border-top border-2">
            <Button
              variant="secondary"
              className="m-3"
              onClick={this.props.onHide}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                this.props.postComment(
                  this.state.comments,
                  this.state.documentID
                )
              }
            >
              Save changes
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default DailyRejectModal;
