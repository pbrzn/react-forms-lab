import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentMessage: ""
    };
  }

  handleChange = (event) => {
    const message = event.target.value;
    this.setState({
      currentMessage: message,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.currentMessage} onChange={this.handleChange}/>
        <p>You have got {this.props.maxChars - this.state.currentMessage.length} characters remaining. </p>
      </div>
    );
  }
}

export default TwitterMessage;
