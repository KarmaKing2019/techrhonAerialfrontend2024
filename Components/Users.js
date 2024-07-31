import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Registered User",
    selector: (row) => row.firstname,
    sortable: true,
  },
  {
    name: "Register Date",
    selector: (row) => row.createdAt,
    sortable: true,
  },
  {
    name: "Affliation",
    selector: (row) => row.affiliation,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row) => row.mobilePhone,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
];

const User = (props) => {
  return (
    <tr>
      {/* console.log(props) alert("user props: " + props) */}
      <td>{props.user.firstname + " " + props.user.lastname}</td>
      <td>{props.user.createdAt}</td>
      <td>{props.user.affiliation}</td>
      <td>{props.user.mobilePhone}</td>
      <td>{props.user.email}</td>
      {/* <td>{props.user.date.substring(0, 10)}</td>
      <td>{props.user.affiliation}</td>
      <td>{props.user.date.substring(0, 10)}</td>
      <td>{props.user.mobilePhone}</td>
      <td>{props.user.email}</td> */}
      <td>
        <Link to={"/edit/" + props.user._id}>Edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteUser(props.user._id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default class Users extends Component {
  constructor(props) {
    super(props);
    // Create an array to hold all the current users in the database
    this.state = { users: [] };
  }

  // On mount retrieve all users
  componentDidMount() {
    axios
      .get("https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/users/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .then(() => {
        //console.log(JSON.stringify(this.state.users));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Add Method that allows deletion
  // 'filter' will take the existing users array and go through each
  // one and only display items that DON'T have the id provided as an argument to the method "id"
  // Note: so the state variable will be modified and we are not modifying the database.

  deleteUser = (id) => {
    axios
      .delete(
        "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/user/" + id
      )
      .then((res) => console.data);
    this.setState({
      users: this.state.users.filter((el) => el._id !== id),
    });
  };

  userList() {
    return this.state.users.map((currentUser) => {
      // console.log({currentUser.firstname})
      return (
        // <h3>{currentUser.firstname}</h3>
        <User
          deleteUser={this.deleteUser}
          user={currentUser}
          key={currentUser._id}
        />
      );
    });
  }

  //   THIS COMPONENT WILL RETURN A TALBE WITH ALL OF THE USERS IN THE MONGODB

  render() {
    return (
      <>
        <DataTable
          columns={columns}
          fixedHeader="true"
          fixedHeaderScrollHeight="200px"
          data={this.state.users}
          selectableRows
          pagination
        />
        <h3>Registered Users</h3>
        {/* ####### Create the table frame, headers .. the body will be defined by a function #### */}
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Registered User</th>
              <th>Register Date</th>
              <th>Affiliation</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </>
    );
  }
}
