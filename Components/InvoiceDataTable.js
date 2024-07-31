import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import React, { useMemo, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import DeleteFilesOptions from "./DeleteFilesOptions";
import ReactTableInvoices from "./ReactTableInvoices";

import { NameModule, faker } from "@faker-js/faker";

import styled from "styled-components";

const CircularJSON = require("circular-json");
// column 1: leave blank to allow checkboxes (hold until later)
// column 2: file
// column 3 : Date Modified
// column 4 : Affiliate
// column 5:  Action(s)

// CREATE CSS STYLING TO DATATABLE VIA THE 'customStyles' prop
const customStyles = {
  table: {
    tableLayout: "auto",
    border: "1px solid blue",
  },
  rows: {
    style: {
      border: "1px solid red",
      minHeight: "72px", // override the row height
      paddingLeft: "2px", // override the cell padding for data cells
      paddingRight: "1px",
    },
  },
  // headCells: {
  //   style: {
  //     paddingLeft: "8px", // override the cell padding for head cells
  //     paddingRight: "8px",
  //   },
  // },
  cells: {
    style: {
      border: "1px solid black",
      display: "inline",
    },
  },
};

let newInvoiceArray = [{}];

const data = [
  {
    id: 1,
    select: "",
    file: "Beetlejuice",
    dateModified: "",
    affiliate: "",
    action: "",
  },
  {
    id: 2,
    select: "",
    file: "Alta Migo",
    dateModified: "",
    affiliate: "",
    action: "",
  },
  {
    id: 3,
    select: "",
    file: "Country Bumpkin",
    dateModified: "",
    affiliate: "",
    action: "",
  },
];

const createUser = () => ({
  name: faker.person.firstName("male") + " " + faker.person.lastName("male"),
  // affilate: "Inhouse",
  // email: faker.internet.email(),
  affiliation: "Contractor",
  file: faker.system.filePath(),
  dateModified: JSON.stringify(faker.date.recent()),
  // bio: faker.lorem.sentence(),
  // image: faker.image.avatar(),
});

const createUsers = (numUsers = 5) =>
  new Array(numUsers).fill(undefined).map(createUser);

const fakeUsers = createUsers(2000);

//console.log(JSON.stringify(fakeUsers));

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ===========================================================

export default function InvoiceDataTable(props, filePack) {
  // props.setFileUrl('true',"http://www.google.com")
  // console.log(props.setFileUrl);

  //console.log("FILEPACK props :" + JSON.stringify(props.filePack));
  //alert(JSON.stringify(props.filePack))
  newInvoiceArray = props.filePack;
  //console.log(props.filePack);
  const [files, setFiles] = useState(props.filePack);
  // 'filterText'
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const [showRowSelectedRowOptions, setShowSelectedRowOptions] =
    React.useState(false);

  const [selectedRow, setSelectedRow] = useState(null);

  const [selectedRows, setSelectedRows] = React.useState(false);
  const [toggledClearRows, setToggleClearRows] = React.useState(false);

  const [selectedRowsToDelete, setSelectedRowsToDelete] = React.useState([]);

  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered
  const handleClearRows = () => {
    setToggleClearRows(!toggledClearRows);
  };

  const filteredItems = props.filePack.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const SubHeaderComponentMemo = () => {
    const handleClear = React.useMemo(() => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
        console.log("Subheader was called.");
      }
      return (
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          //onFilter={(e) => setFilterText("Gregg")}
          onClear={handleClear}
          filterText={filterText}
          className="border border-5"
        />
      );
    }, [filterText, resetPaginationToggle]);
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      compact: true,
    },
    {
      name: "Date Submitted",
      selector: (row) => row.dateModified,
      width: "12%",
      sortable: true,
      style: (column) => ({
        padding: "5px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        // minWidth: "100px",
        // paddingLeft: "2px", // override the cell padding for data cells
        // paddingRight: "2px",
        // border: "2px solid purple",
        // minWidth: '800px'
      }),
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      compact: true,
      style: (column) => ({
        // minWidth: "100px",
        // whiteSpace: "wrap",
        paddingTop: "10px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        border: "5px",

        // border: "2px solid blue",
      }),
    },

    // {
    //   name: "Record",
    //   selector: (row) => row.record,
    //   sortable: true,
    //   compact: true,
    // },

    {
      name: "File",
      selector: (row) => row.fileUrl,
      width: "30%",
      sortable: true,
      cell: (row, index, column, id) => {
        const url = row.fileUrl;
        const fileName = url.split("/").pop();
        return (
          <>
            {/* <Link to={row.fileUrl} target="_blank" download>
              Download
            </Link> */}
            {/* <a href={row.fileUrl} download={fileName}>
              <button>Download</button>
            </a> */}
            <p
              onClick={(event) => {
                //props.setFileUrl(row.fileUrl);
                // event.preventDefault();
                // window.open(
                //   url,
                //   "_blank",
                //   "toolbar=0,status=0,width=548,height=325"
                // );
              }}
            >
              {fileName}
            </p>
            {/* <Link
            to="http://localhost:3000/dashboard"
            onClick={() => {
              window.open(url, "_blank");
            }}
          >
            {fileName}
          </Link> */}
          </>
        );
      },
      // d-flex justify-content-center align-items-center
    },

    {
      name: "Approval Status",
      cell: (row, index, column, id) => {
        return "Under Review";
      },
    },
    {
      name: "Action",
      subHeaderAlign: "right",
      responsive: true,
      headerStyle: (selector, id) => {
        return { width: "580px", textAlign: "center" };
      },
      direction: "rtl",
      cell: (row, index, column, id) => {
        return (
          <div className="border  ">
            <button className="border  ">View</button>
            <button className="border ">Delete</button>
          </div>
        );
      },
      style: (column) => ({
        // minWidth: "100px",
        paddingLeft: "2px", // override the cell padding for data cells
        paddingRight: "2px",
        // border: "2px solid black",
        // minWidth: '800px'
      }),
    },
  ];

  // const rowSelectCritera = row => (row.id in selectedRows);

  // File Data Table with Filter ability - a component that will be used at render()
  const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
      <TextField
        id="search"
        type="text"
        placeholder="Filter By Name"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
      />
      <ClearButton type="button" onClick={onClear}>
        X
      </ClearButton>
    </>
  );

  // ###### METHOD: DATA => FORMAT TO DATATABLE DATA FORMAT
  const formatData = (props) => {
    //console.log({files});
    // console.log("Files: " + JSON.stringify(props));
    if (props.length > 0) {
      //console.log("myObject is not null");
      //console.log(props.data);
      const invoice = props.map((item) => {
        console.log("==" + JSON.stringify(item));
        return item;
      });
      // -- STEP 1 - PULL DATA TO CONSTRUCT ARRAY FOR DATATABLE
      // take array invoiceItems and pull relevent data

      // Create a new array to hold the formatted data
      const formattedData = [];

      // Loop through the source data, and format into an object
      props.forEach((item) => {
        // format the data to be stored
        const formattedItem = {
          id: item._id,
          name: item.name,
          affiliation: item.affilition,
          url: item.fileUrl,
          createdAt: new Date(item.createdAt).toLocaleString("en-US"),
        };
        console.log(formattedItem);
        formattedData.push(formattedItem);
      });

      return formattedData;

      const invoiceItems = invoice.map((invoice, index) => {
        const name = invoice.name;
        // console.log("name : " + name);

        const record = invoice._id;
        // console.log("record: " + record);

        const affiliation = invoice.affiliation;
        // console.log("affiliation : " + affiliation);

        const url = invoice.fileUrl;
        // console.log("url : " + url);

        const createdAt = new Date(invoice.createdAt).toLocaleString("en-US");
        // console.log("createdAt : " + createdAt);

        let createAtFormatted = createdAt.substring(0, 9);
        // .toLocaleString("en-US")
        // .substring(0, 10);
        //console.log("lastModified : " + createAtFormatted);
        // const formattedLastModified = lastModified.replace(",", "");
        // const fileName = url.split("/").pop();
        //console.log("%%%%%%%%%%%%>>>>>" + fileName);

        // ==== THIS IS WHERE WE ARE GENERATING THE OBJECTS THAT CREATES THE ARRAY

        // return {
        //   id: index,
        //   select: "",
        //   name: name,
        //   // record: record,
        //   affiliation: affiliation,
        //   fileUrl: url,
        //   dateModified: createAtFormatted,
        // };
      });

      //const input = [{ name: "Virgo Jones", affiliation: "plumber" }];
      console.log("What we see: " + JSON.stringify(invoiceItems));
      // return invoiceItems;

      // return (
      //   <div
      //     className="border  shadow w-100 mx-auto"
      //     style={{ position: "relative" }}
      //   >
      //     <DataTable
      //       title="Submitted Invoices"
      //       columns={columns}
      //       data={invoiceItems}
      //       pagination
      //       paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      //       subHeader
      //       // defaultSortFieldId={1}
      //       // customStyles={customStyles}
      //       // onRowClicked={() => handleRowSelected2}
      //       // onSelectedRowsChange={() => setShowSelectedRowOptions(true)}
      //       subHeaderComponent={SubHeaderComponentMemo}
      //       selectableRows
      //       persistTableHead
      //     />
      //     {/* <h1>Hello</h1> */}
      //   </div>
      // );

      // return invoiceItems;
      // return <div className="border shadow mb-2">{invoiceItems} </div>;
    } else {
      // ========== SHOW USER THAT THE DATASET IS EMPTY
      return (
        <div>
          <br />
          "This data is not there"
        </div>
      );
    }
  };

  //console.log("==================================");

  //console.log("Format Data : " + JSON.stringify(props));

  //alert({ files });

  // newInvoiceArray = formatData({files})

  // const newInvoiceArray = () => {
  //   //console.log("From newInvoiceArray: " + JSON.stringify({files}));
  //   if ({files}) {
  //     formatData({files});
  //   } else {
  //     console.log('*** EMPTY ARRAY ****');
  //   }
  // };

  // console.log(
  //   "THE VALUE OF newInvoiceArray : " +
  //     CircularJSON.stringify(newInvoiceArray) +
  //     "\n"
  // );

  // list each element of array
  // newInvoiceArray.props.children.map((item) => {
  //   console.log(item + '\n');
  // })

  // Function to delete a file by ID
  const deleteFile = (id) => {
    console.log(`Trying to delete id:  + ${id} `);
    axios
      .delete(
        `https://techrhon-aerial-backend-6f1de05e4d4b.herokuapp.com/files/${id}`
      )
      .then((response) => {
        // Handle the response if the file was successfully deleted
        console.log("File deleted:", response.data);
        // Update the state to reflect the deletion
        const updatedFiles = files.filter((file) => file.id !== id);
        setFiles(updatedFiles);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.log("=============");
        console.error("Error deleting file:", error);
      });
  };

  const handleRowSelected2 = () => {
    console.log("handle2 called");
    setShowSelectedRowOptions(true);
  };

  const handleRowSelected = ({ selectedRows }) => {
    //     const updatedSelectedRows = [...selectedRows];
    //     selectedRows.map(row => {
    // if (updatedSelectedRows.includes(row)) {
    //   console.log('THIS IS TRUE MATCH FOUND')
    //   // If the row is already selected, remove it from the selectedRows array
    //    updatedSelectedRows.splice(updatedSelectedRows.indexOf(row), 1);
    // } else {
    //   // If the row is not selected, add it to the selectedRows array
    //   updatedSelectedRows.push(selectedRows);
    // }
    // setSelectedRows(updatedSelectedRows);
    //     })

    // console.log(selectedRows[0].id)
    //setSelectedRow(selectedRows[0].id);
    // setShowSelectedRowOptions(true);

    console.log("Entry: " + JSON.stringify(selectedRows.length));
    //setShowSelectedRowOptions(true);
    // if there are no selected rows, then hide the options div for delete, clear, and cancel
    if (selectedRows.length > -1) {
      // setShowSelectedRowOptions(true);
      // return;
    }
    // console.log(JSON.stringify(selectedFiles));
    // selectedRows.map((row) => {
    //   console.log("Entry: " + JSON.stringify(row.id));
    //   deleteFile(row.record);
    // });
  };

  const send = () => {
    // props.showInvData("Gerald");
    // setFiles(props.filePack);
    console.log(JSON.stringify(filteredItems));
    // setShowSelectedRowOptions(true);
  };

  const deleteSelectedFiles = (id) => {
    console.log("Delete Requested");
    // selectedFiles.map((val) => {
    //   deleteFile(val.record);
    // });
  };

  return (
    <div
      className="border  shadow p-0 w-100"
      style={{ height: "800px", width: "100vw", position: "relative" }}
    >
      {/* <DeleteFilesOptions show={showRowSelectedRowOptions}/> */}
      {showRowSelectedRowOptions && (
        <div id="deleteOptions" className="container border border-info">
          <button onClick={deleteSelectedFiles}>Delete</button>
          <button onClick={send}>Click me</button>
        </div>
      )}
      {/* <input
        type="text"
        placeholder="Filter..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      /> */}
      <div
        className="border "
        style={{
          postion: "fixed",
          display: "block",
          overflow: "auto",
          width: "96vw",
        }}
      >
        {/* #outer {
    display: block;
    position: fixed;
    left: 1px;
    top: 40px;
    width: auto;
    right: auto;
    bottom: auto;
    z-index: 1000;
    border: 2px solid silver;
    height: 100%;
} */}
        <div
          className=" mt-0 pl-2"
          style={{
            position: "relative",
            overflowX: "scroll",
            overflowY: "hidden",
            height: "700px",
            width: "100%",
          }}
        >
          {/* {formatData(props.filePack)} */}
          <ReactTableInvoices
            setFileUrl={props.setFileUrl}
            data={props.filePack}
            deleteFile={deleteFile}
            isDocumentTblSelectable={props.isDocumentTblSelectable}
          />
        </div>
      </div>

      {/* THIS CALLS THE INVOICE METHOD TO RETREIVE INVOICES, THIS CALLS 'formatData' and passes the props from invoice */}
      {/* {JSON.stringify(newInvoiceArray)} */}

      {/* {formatData(filteredItems)} */}
      {/* {JSON.stringify(filteredItems)} */}
      {/* <Button onClick={send}>Show Files</Button> */}
      <br />
      <br />
    </div>
  );
}
