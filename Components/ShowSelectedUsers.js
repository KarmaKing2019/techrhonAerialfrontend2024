import React, { Component } from "react";
import axios from "axios";

const UserListView = (props) => {
  let { selectedUsers } = props.selectedUsers;
  const getFreshUserList = () => props.getFreshUserList();
  const update_AllSelectedRows =  props.update_AllSelectedRows;
  const close_AllSelectedRows = props.close_AllSelectedRows;
//console.log(JSON.stringify(props));


  if (selectedUsers) {
    //console.log("UserListView: " + JSON.stringify(selectedUsers));
  }

  const cancelSelectedView = () => {
    console.log('Cancelling selectedView ... ')
    close_AllSelectedRows();
    //getFreshUserList();
    //console.log("Props : " + JSON.stringify(props.refreshUserList));
  }

  const confirmDelete = (id, props) => {
    // selectedUsers.filter()
    let selectedUsers = props.selectedUsers
    //alert("confirmDelete() Response: " + JSON.stringify(selectedUsers));
  
    // Iteration test on selectedUsers
    // selectedUsers.map((item) => {
    //   console.log(item)
    //   return item;
    // })

    console.log(`attempting to delete ... ${props}`);

    // ### This is the call to Mongo to delete by ID
    // ##########################################################
    // axios
    //   .delete(`http://localhost:5000/users/${props}`)
    //   .then((response) => {
    //     console.log(response.data); // Success message or response data
    //     // Perform any additional actions after successful deletion
    //   })
    //   .catch((error) => {
    //     console.log(error); // Error message or error object
    //     // Handle the error or display an error message
    //   });

    // ### Update the table 
    let filteredUsers = selectedUsers
      .filter((selectedUser) => selectedUser._id !== id)
      .map((filteredUser) => {
        // compare results
        console.log(filteredUser._id + " : " + id);
        return filteredUser;
      });

    // ### Update the state for selectedUsers
    //props.selectedUsers = filteredUsers
    //props.update_AllSelectedRows(filteredUsers) <= DONT WORK
    //update_AllSelectedRows(filteredUsers)
    //alert(JSON.stringify(filteredUsers));
    update_AllSelectedRows(filteredUsers);
    //update_AllSelectedRows("Warren G");
//update_AllSelectedRows;
    console.log("Filtered Users:  " + JSON.stringify(filteredUsers));

      // ##### Call parent method to force update the user table
getFreshUserList();
  
  };

  return (
    <div>
      <div className="container d-flex  ">
        {props.selectedUsers.length > 0 ? (
          <div className="container">
            <p>
              {props.selectedUsers.map((item) => {
                return (
                  // NAME ==========================
                  <div className="row mb-2 border-bottom border-5 pb-4 pt-4">
                    {/* // LEFT PANE ========================== */}
                    <div className="col-12 col-md-6  p-3">
                      <label htmlFor="name" className="pr-2 font-weight-bold">
                        {"Name: " + item.firstname + " " + item.lastname}
                      </label>

                      <br />
                      <label htmlFor="record" className="pr-2 font-weight-bold">
                        {"Record: " + item._id}
                      </label>
                      <br />
                      <label htmlFor="record" className="pr-2 font-weight-bold">
                        {"Affiliation: " + item.affiliation}
                      </label>

                      <br />
                      <label htmlFor="address" className="pr-2">
                        {"Address: " + item.address}
                      </label>
                      <br />
                      <label htmlFor="city" className="pr-2">
                        {"City: " + item.city}
                      </label>
                      <br />
                      <label htmlFor="state" className="pr-2">
                        {"State: " + item.state}
                      </label>
                      <br />
                      <label htmlFor="zipCode" className="pr-2">
                        {"Zip Code: " + item.zipCode}
                      </label>
                      <br />
                      <label htmlFor="homePhone" className="pr-2">
                        {"Home Phone: " + item.homePhone}
                      </label>
                      <br />
                      <label htmlFor="mobilePhone" className="pr-2">
                        {"Mobile Phone: " + item.mobilePhone}
                      </label>
                      <br />
                      <label htmlFor="email" className="pr-2">
                        {"Email: " + item.email}
                      </label>
                      <br />
                    </div>
                    {/* // RIGHT PANE ========================== */}
                    <div className="col-12 col-md-6  p-3 ">
                      <label
                        htmlFor="emergencyContact"
                        className="pr-2 font-weight-bold"
                      >
                        {"Emergency Contact: " + item.emergencyContact}
                      </label>
                      <br />
                      <label htmlFor="emergencyRelationship" className="pr-2">
                        {"Emergency Relationship: " +
                          item.emergencyRelationship}
                      </label>
                      <br />
                      <label htmlFor="emergencyCity" className="pr-2">
                        {"City: " + item.emergencyCity}
                      </label>
                      <br />
                      <label htmlFor="emergencyPhone" className="pr-2">
                        {"Emergency Phone: " + item.emergencyPhone}
                      </label>
                      <br />
                      <label htmlFor="Comments" className="pr-2">
                        {"Comments: " + item.medicalInfo}
                      </label>
                      <br />
                    </div>
                    <br />
                    <div className="  d-grid gap-2">
                      <button
                        type="button btn-outline-primary"
                        class="btn  btn-outline-primary"
                        onClick={() => confirmDelete(item._id, props)}
                        //onClick={props.getFreshUserList} <== This worked
                      >
                        Delete
                      </button>
                      <button
                        type="button btn-outline-primary"
                        class="btn  btn-outline-primary"
                        onClick={() => cancelSelectedView()}
                        //onClick={props.getFreshUserList} <== This worked
                      >
                        Close
                      </button>
                    </div>
                    <br />
                  </div>
                );
              })}
            </p>
          </div>
        ) : (
          <p>negative</p>
        )}
      </div>

      {/* // selectedUsers.map((val) => { */}
      {/* //     return <p>val.firstname</p>
        // }) */}
    </div>
  );
};

export default class ShowSelectedUsers extends Component {
  constructor(props) {
    super(props);
    // const [toggleTable, settoggleTable] = React.useState(false);
    this.state = {
      allSelectedRows: props,
    };
  }

  componentDidMount() {
  this.props.getFreshUserList()
   //console.log('showSelectedUsers props: ' + JSON.stringify(this.props))
    this.setState({ allSelectedRows: this.props });
    // console.log(
    //   "Show Selected Props: " + JSON.stringify(this.state.allSelectedRows)
    // );
    //alert(JSON.stringify(this.state.allSelectedRows))
  }

  // == Method to verify data in props
  checkData = () => {
    //alert(JSON.stringify(this.state.allSelectedRows));
    console.log(
      "Show Selected Props: " + JSON.stringify(this.state.allSelectedRows)
    );
  };

  render() {
    return (
      <div>
        {/* ShowSelectedUsers
        {JSON.stringify(this.state.allSelectedRows)} */}

        <UserListView
          selectedUsers={this.props.selectedUsers}
          getFreshUserList={this.props.getFreshUserList()}
          update_AllSelectedRows={this.props.update_AllSelectedRows}
          close_AllSelectedRows={this.props.close_AllSelectedRows}
        />
        <button onClick={this.checkData}>Check</button>
      </div>
    );
  }
}
