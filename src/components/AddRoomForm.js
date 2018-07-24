import React, { Component } from "react";

class AddRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="add-room-form grid__elem">
        <form className="room-form">
          <input className="room-input" placeholder="New Room" />
          <button className="room-button" type="submit">
            <i className="fas fa-plus fa-2x icon" />
          </button>
        </form>
      </div>;
  }
}

export default AddRoomForm;
