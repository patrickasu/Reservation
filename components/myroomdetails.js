import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class RoomDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>VIEW DETAILS</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>ROLY HOTEL AND LUXURY</ModalHeader>
          <ModalBody>
          	<p>Roly Hotel have the best rooms and its suites are decorated designed for your comfort and relaxation. All the rooms have large balconies and beautiful views of either the city or the Atlantic Ocean; our friendly and professional staff are always a phone call away to assist you with anything you may need. Roly Hotel is the main building on our property and it houses most of the attractive features which Roly Hotels & Suites has become known for. These include 447 rooms, a spectacular swimming pool, the Sky Restaurant & Lounge, Crossroads Tex-Mex Restaurant, Red Chinese Restaurant & Lounge, the Kuramo sports cafe, the Calabash Bar, Lagoon Breeze Restaurant and a thai restaurant coming soon; a world-class gym; steam rooms; a massage parlour; a medical clinic, the Art21 Gallery, a bookstore; several lounges; a business centre and state-of-the-art conferencing and banqueting facilities.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RoomDetails;