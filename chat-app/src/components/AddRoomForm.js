import React, { Component } from "react";

class AddRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="add-room-form grid__elem">
        <span className="button-text">Add Room</span><i className="fas fa-plus icon" />
      </div>;
  }
}

export default AddRoomForm;
