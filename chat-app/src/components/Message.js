import React from "react";

function Message(props){
  return <div key={props.id} className="msg">
      <div className="msg-author">{props.author}</div>
      <div className="msg-content">{props.message}</div>
    </div>;
}

export default Message;
