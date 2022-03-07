import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

export default class Contact extends Component {
  state = {
    contacts: [
      { name: "Name 1", phone: "+123456789" },
      { name: "Name 2", phone: "+123456780" },
      { name: "Name 3", phone: "+123456781" },
      { name: "Name 4", phone: "+123456782" },
    ],
  };

  render() {
    const addContact = (data) => {
      console.log("Form onSubmit: FUNC-PARENT Params:", data);
      const { contacts } = this.state;
      // console.log("Contacts Old:::", contacts);
      contacts.push(data);
      // console.log("Contacts New:::", contacts);
      this.setState({ contacts: contacts });
    };
    console.log("Contact.JS STATE:::", this.state);
    return (
      <div>
        <h1>PhoneBook App</h1>
        <List contacts={this.state.contacts} />
        <Form addContact={addContact} />
      </div>
    );
  }
}
