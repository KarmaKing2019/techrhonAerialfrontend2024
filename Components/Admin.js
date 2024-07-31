import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Users from "./Users";
import DataTable from "../../src/index";
import Invoices from "./Invoices";

export default class Admin extends Component {
  render() {
    return (
      <div className="container-fluid mt-3 shadow" style={{ height: "100%" }}>
        <div className="container ">
          <div className="p-4">
            <h4>Master Access</h4>
          </div>
          <div className="row">
            <div className="col">
              <Tabs
                defaultActiveKey="registeredUserTab"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="registeredUserTab" title="Registered Users">
                  <Users />
                </Tab>
                <Tab eventKey="invoiceTab" title="Invoices">
                  <Invoices />
                </Tab>
                <Tab eventKey="resourceTab" title="Resources" disabled>
                
                  Tab content for Contact
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
