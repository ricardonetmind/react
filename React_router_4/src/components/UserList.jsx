import React from 'react';
let createReactClass = require('create-react-class');

import User from './User.jsx';

const UserList = createReactClass({
  render: function() {
    var userNodes = this.props.data.map(function(user) {
      return (
        <User key={user.id} id={user.id} name={user.name} email={user.email} />
      );
    });
    return (
      <div className="UserList">
        <table className="table table-striped">
          <thead>
            <tr><th>Id</th><th>Nombre</th><th>Email</th></tr>
          </thead>
          <tbody>
            {userNodes}
          </tbody>
        </table>
      </div>
    );
  }
});

export default UserList;
