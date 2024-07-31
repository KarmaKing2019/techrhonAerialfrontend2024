import React, { Component } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Table from "react-bootstrap/Table";
import ShowSelectedUsers from "./ShowSelectedUsers";
import { Button, Image, Form, FormRange } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Filter from "./Filters";
import { propTypes } from "react-bootstrap/esm/Image";

const columns = [
  // {
  //   name: "Record",
  //   selector: (row) => row._id,
  //   sortable: true,
  // },
  {
    name: "First Name",
    selector: (row) => row.firstname,
    sortable: true,
    width: "10%",
  },
  {
    name: "Last Name",
    selector: (row) => row.lastname,
    sortable: true,
    width: "10%",
  },
  {
    name: "Affliattion",
    selector: (row) => row.affiliation,
    sortable: true,
    width: "12%",
  },
  {
    name: "Home Phone",
    selector: (row) => row.homePhone,
    sortable: true,
    width: "15%",
  },
  {
    name: "Mobile Phone",
    selector: (row) => row.mobilePhone,
    sortable: true,
    width: "15%",
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
    width: "20%",
  },
  {
    name: "Address",
    selector: (row) => row.address,
    sortable: true,
    width: "20%",
  },
  {
    name: "State",
    selector: (row) => row.state,
    sortable: true,
    //   width: "5%",
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
    //   width: "8%",
  },
  // {
  //   name: "Status",
  //   selector: (row) => "Under Review",
  //   sortable: true,
  // },
];

export default class UserTable extends Component {
  constructor(props) {
    super(props);
    // const [toggleTable, settoggleTable] = React.useState(false);
    this.state = {
      allUsers: [],
      toggleTable: false,
      allSelectedRows: [],
      toggleSelectedUsers: false,
      showUserTable: true,
      showSearchButton: false, // show or hide
      numberOfEmployees: 0,
      firstname: "",
      filteredUsers: [],
    };
  }

  componentDidMount() {
    // Get all the Current Users upon initialization
    axios
      .get("https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/users")
      .then((response) => {
        //console.log(JSON.stringify(response.data));
        this.setState({ allUsers: response.data });
        this.setState({ filteredUsers: response.data });
        //this.setState({ files: response.data });
      })
      .then(() => {
        //console.log(JSON.stringify(this.state.files));
      })
      .catch((error) => {
        console.log("axiosGetFiles : " + error);
      });
  }

  componentDidUpdate() {
    console.log(this.state.firstname);
    //this.getFreshUserList();
    //this.changeFirstname();
    // let filterUsers = this.state.allUsers
    //   .filter((name) => name.firstname.includes(this.state.firstname))
    //   .map((filteredName) => {
    //     return filteredName;
    //   });
    // if (filterUsers) {
    //   this.setState({ allUsers: filterUsers });
    // }
  }

  // this method will get a fresh user list .. specifically, if any of the selected users are deleted
  // I need to update the current table to reflect that. The call will refresh the 'allUsers' state.

  getFreshUserList = () => {
    //alert("Refresh User List Initiated.");
    axios
      .get("https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/users")
      .then((response) => {
        //console.log(JSON.stringify(response.data));

        this.setState({ allUsers: response.data });
        //this.setState({ files: response.data });
      })
      .then(() => {
        //console.log(JSON.stringify(this.state.files));
      })
      .catch((error) => {
        console.log("axiosGetFiles : " + error);
      });
  };

  changeToggleTable = () => {
    this.setState({ toggleTable: !this.state.toggleTable });
    this.setState({ showSearchButton: !this.state.showSearchButton });

    // settoggleTable(!toggleTable);
    console.log("hello");
  };

  contextActions = () => {
    // custom buttons or interface
  };

  handleRowSelected = (props) => {
    //console.log('selected prop: ' + JSON.stringify(props))
    this.setState({ allSelectedRows: props.selectedRows });
    //alert(JSON.stringify(this.state.allSelectedRows));
  };

  toggleSelectedUsers = () => {
    console.log("ToggleSelectedUsers Clicked.");
    this.setState({ toggleSelectedUsers: !this.state.toggleSelectedUsers });
    this.setState({ showUserTable: !this.state.showUserTable });
    console.log(this.state.showUserTable);
  };

  update_AllSelectedRows = (props) => {
    console.log("UPDATING AllSelectedRows ...Props: " + JSON.stringify(props));
    this.setState({ allSelectedRows: props });
    return;
  };

  close_AllSelectedRows = () => {
    this.setState({ toggleSelectedUsers: !this.state.toggleSelectedUsers });
    this.setState({ showUserTable: !this.state.showUserTable });
  };

  filterCriteria = (obj) => {
    // return obj.firstName.includes("a");
    // &&
    //  obj.lastName.includes(lastName) &&
    //  obj.city.includes(city);
  };

  updateTable = (props) => {
    console.log("UpdateTable: " + JSON.stringify(props));
    let searchString = JSON.stringify(props).toLowerCase();
    //alert(JSON.stringify(props));
    let filtered = this.state.allUsers.filter((value) => {
      return value.firstname.toLowerCase().includes(props.toLowerCase());
    });
    this.setState({ filteredUsers: filtered });
  };

  // ASSIGN FIRSTNAME TO STATE 'firstname'
  changeFirstname = (event) => {
    console.log("**");
    this.setState({ firstname: event.target.value });
    this.updateTable(event.target.value);

    // if empty refresh table
    // if (event.target.value.length > 0) {
    //   console.log("==============================");
    //   this.setState({ firstname: event.target.value });
    //   // take ALL usersData and see if what the user entered can be found
    //   let filterUsers = this.state.allUsers
    //     .filter((name) => name.firstname.includes(event.target.value))
    //     .map((filteredName) => {
    //       return filteredName;
    //     });

    //   this.setState({ allUsers: filterUsers });
    //   //this.getFreshUserList();
    // } else {
    //   //this.getFreshUserList();
    // }
    //

    console.log(this.state.firstname);
    //console.log(JSON.stringify(this.state.allUsers));
  };

  render() {
    return (
      <div className="p-0  border" style={{ width: "98%" }}>
        <div
          className="border border-2 border-dark m-1 mr-2 mt-3 mb-3"
          style={{ height: "100px", width: "98%", backgroundColor: "white" }}
        >
          <div className="border border-dark pl-4 mt-1 pt-2 pb-2">
            <b>Employees: {" " + this.state.allUsers.length}</b>
          </div>
          <div className="row">
            <InputGroup className="mb-3 border">
              <InputGroup.Text
                id="basic-addon1"
                className=" justify-content-end"
              >
                Search
              </InputGroup.Text>
              <Form.Control
                placeholder=""
                aria-label="Search"
                aria-describedby="basic-addon1"
                onChange={this.changeFirstname}
                // onKeyDown={this.changeFirstname}
              />
            </InputGroup>
          </div>
        </div>
        <div
          className=""
          style={{
            postion: "relative",
            overflow: "auto",
            height: "800px",
            width: "100%",
          }}
        >
          <div
            className="border border-primary"
            style={{
              // position: "absolute",
              overflow: "auto",
              width: "100%",
              hieght: "250%",
            }}
          >
            <div
              className=" "
              style={{
                position: "relative",
                width: "1500px",
                height: "1000px",
                overflow: "auto",
              }}
            >
              <Table
                striped
                bordered
                hover
                className="  table-hover "
                style={{ width: "250%", height: "500px", position: "absolute" }}
              >
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Affiliation</th>
                    <th>City</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  {/* dummyData.filter(filterCriteria) */}
                  {this.state.filteredUsers.map((person) => {
                    return (
                      <tr>
                        <td>{person.firstname}</td>
                        <td>{person.lastname}</td>
                        <td>{person.email}</td>
                        <td>{person.mobilePhone}</td>
                        <td>{person.affiliation}</td>
                        <td>{person.city}</td>
                        <td>{person.state}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
