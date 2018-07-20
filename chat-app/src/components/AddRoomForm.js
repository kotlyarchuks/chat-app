import React, { Component } from "react";

class AddRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="add-room-form grid__elem">
        Add Room <i className="fas fa-plus" />
      </div>;
  }
}

export default AddRoomForm;
