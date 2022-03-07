import React, { Component } from "react";

export class Form extends Component {
  state = { name: "", phone: "" };

  // onChangeFunc(e) {
  //   console.log("writing...", e.target.value);
  // }
  render() {
    const onChangeFunc = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    console.log(this.props);
    const onSubmitFunc = (event) => {
      event.preventDefault();
      if (this.state.name === "") {
        alert("Name not be blank!!!");
      } else {
        console.log("Form onSubmit: FUNC-CHILD");
        this.props.addContact({ ...this.state });
        this.setState({ name: "", phone: "" });
      }
    };

    const formInputStyle = {
      marginTop: "10px",
      height: "30px",
      lineHeigth: "25px",
      width: "400px",
      textIndent: "10px",
    };
    return (
      <div>
        <form
          onSubmit={onSubmitFunc}
          style={{ width: "400px", margin: "0 auto", padding: "0" }}
        >
          <input
            style={formInputStyle}
            value={this.state.name}
            onChange={onChangeFunc}
            name="name"
            id="name"
            placeholder="enter a name..."
          ></input>
          <br />
          <input
            style={formInputStyle}
            value={this.state.phone}
            onChange={onChangeFunc}
            name="phone"
            id="phone"
            placeholder="enter a phone..."
          ></input>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
