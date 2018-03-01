import React from 'react';
let createReactClass = require('create-react-class');

var User = createReactClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  deleteUserHandler(e){
    e.preventDefault();
    console.log('Delete user!',this.props.id);
    this.props.onDeleteUser(this.props.id);
  },

  render: function() {
    console.log('User:',this.props);
    
    return (
      <tr><td>{this.props.id}</td><td>{this.props.name}</td><td>{this.props.email}</td><td><a href="#" onClick={this.deleteUserHandler}>x</a></td></tr>
    );
  }
});

export default User;
