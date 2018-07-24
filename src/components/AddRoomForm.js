import React, { Component } from "react";

class AddRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: ""
    };
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      room: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createRoom(this.state.room)
    this.setState({
      room: ""
    })
  }

  render() {
    return <div className="add-room-form grid__elem">
        <form onSubmit={this.handleSubmit} className="room-form">
          <input onChange={this.handleChange} value={this.state.room} className="room-input" placeholder="New Room" />
          <button className="room-button" type="submit">
            <i className="fas fa-plus fa-2x icon" />
          </button>
        </form>
      </div>;
  }
}

export default AddRoomForm;
