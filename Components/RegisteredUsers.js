import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default class RegisteredUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
    };
  }

  componentDidMount() {
    this.getAllRegistered();
  }

  getAllRegistered = () => {
    // GET ALL REGISTERED USERS
    axios
      // .get("http://localhost:5000/files/")
      .get(
        "https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/registered"
      )
      .then((response) => {
        console.log("ALL REGISTERED USERS: " + JSON.stringify(response.data));
        // console.log(Object.keys(response.data).length);

        this.setState({ allUsers: response.data });
      })
      .then((response) => {
        //console.log(JSON.stringify(this.state.files));
      })
      .catch((error) => {
        console.log("axios Get all Registered Users : " + error);
      });
  };

  formatDateTime = (date) => {
    let dateString = date;
    let dateObject = new Date(dateString);
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    const formattedDate = `${
      dateObject.getMonth() + 1
    }/${dateObject.getDate()}/${dateObject.getFullYear()} ${formattedHours}:${formattedMinutes} ${ampm}`;
    return formattedDate;
  };

  render() {
    return (
      <div>
        <div
          className="mt-4"
          style={{ height: "100%", backgroundColor: "#FFF7D9" }}
        >
          <div className="p-2 border-top border-bottom border-dark border-2">
            <b>
              <span>Registered Users</span>
            </b>
          </div>
        </div>
        <div>
          <div
            style={{
              width: "100%",
              height: "1000px",
              position: "relative",
              overflow: "auto",
            }}
          >
            <div style={{ position: "" }}>
              <Table striped="columns">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.allUsers.map((file) => {
                    return (
                      <tr>
                        <td>{this.formatDateTime(file.createdAt)}</td>
                        <td>{file.firstname}</td>
                        <td>{file.lastname}</td>
                        <td>{file.email}</td>
                        <td>
                          {window.fullname === "RHON CAMPBELL"
                            ? file.password
                            : "Not Authorized"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>

          {/* {JSON.stringify(this.state.allUsers)} */}
          {this.state.allUsers.map((registered) => {
            return registered.firstname;
          })}
        </div>
      </div>
    );
  }
}
