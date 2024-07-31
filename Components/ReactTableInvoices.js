import React, { useEffect } from "react";

import differenceBy from "lodash/differenceBy";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import ImageGallery from "./ImageGallery";
// import doc from "./rowMGMT.mdx";

export const ReactTableInvoices = (props) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [allowUpdate, setAllowUpdate] = React.useState(true);
  const [toggleTable, settoggleTable] = React.useState(false);

  const columns = [
    // {
    //   name: "Record",
    //   selector: (row) => row._id,
    //   sortable: true,
    // },
    {
      name: "Submitted",
      selector: (row) => {
        const dateString = row.createdAt;
        const dateObject = new Date(dateString);
        // Format the date
        const formattedDate = dateObject.toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
        return formattedDate;
      },
      sortable: true,
    },
    {
      name: "File",
      selector: (row) => row.fileUrl,
      sortable: true,
      width: "30%",
      style: "color:blue",
      cell: (row, index, column, id) => {
        const url = row.fileUrl;
        const fileName = url.split("/").pop();
        // get the file name
        const file = fileName.split("?w").shift();
        return (
          <>
            <ImageGallery fileUrl={row.fileUrl} />
          </>
        );
      },
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "15%",
    },

    {
      name: "Status",
      selector: (row) => "Under Review",
      sortable: true,
    },
  ];

  useEffect(() => {
    //alert("useEffect :" + props.data)
    //console.log(props.data)
    // Perform action here
    //alert("newData length: " + newData.length);

    if (data) {
      if (allowUpdate) {
        //alert(JSON.stringify("-------" + props.data));
        if (props.data.length > 0) {
          setData(props.data);
        }

        //allowUpdate(false)
      } else {
        // Do nothing
      }
      //alert(props.data)
    }

    // setData(props.data);
    // console.log(JSON.stringify(data));
    return () => {
      // Clean up resources here
    };
  }, [props.data]);

  // const handleChange = ({selectedRows}) => {
  //   //console.log(JSON.stringify(selectedRows))
  //   selectedRows.map((row) => {
  //     console.log("== " + JSON.stringify(row))
  //   })
  // }

  const handleRowSelected = React.useCallback((state) => {
    // console.log(JSON.stringify(state.selectedRows));
    // state.selectedRows.map((row) => {
    //   console.log("== " + JSON.stringify(row["_id"]));
    // });
    console.log(state.selectedRows);
    setSelectedRows(state.selectedRows);
  }, []);

  const changeToggleTable = () => {
    settoggleTable(!toggleTable);
    console.log(toggleTable);
  };

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      const result = window.confirm(
        `Are you sure you want to delete:\n\n${selectedRows
          .map((r) => r.fileUrl)
          .join("\n\n")}? `
      );

      if (result) {
        console.log("The User wants to delete the following files.");
        selectedRows.map((row) => {
          props.deleteFile(row["_id"]);
          console.log("== " + JSON.stringify(row["_id"]));
          // update data to table to force refesh after delete
          const newData = data.filter((dataRow) => dataRow !== row);
          setData(newData);
          setAllowUpdate(false);
        });

        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "fileUrl"));
      }
    };

    return (
      <Button
        key="delete"
        onClick={handleDelete}
        style={{ backgroundColor: "red" }}
        icon
      >
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);

  return (
    <div style={{ width: "98%", height: "100%" }}>
      {/* {this.props.isDocumentTblSelectable} */}
      <div className="  " style={{}}>
        <div className="row shadow p-2 ">
          <div className="col-1 d-grid gap-2 fontWhite">
            <button
              type="button"
              className="btn btn-default btn-outline-primary  d-flex  border-primary fontWhite"
              style={{ color: "blue" }}
              onClick={changeToggleTable}
            >
              <span className="material-symbols-outlined d-flex justify-align-center p-1 ">
                Remove File
              </span>
            </button>
          </div>
        </div>
      </div>
      {toggleTable ? (
        <div>
          <div>
            <DataTable
              title=" "
              columns={columns}
              data={data}
              selectableRows
              contextActions={contextActions}
              onSelectedRowsChange={handleRowSelected}
              clearSelectedRows={toggleCleared}
              pagination
              style={{ width: "100%" }}
            />
          </div>
        </div>
      ) : (
        <div>
          <DataTable
            title=" "
            columns={columns}
            data={data}
            contextActions={contextActions}
            onSelectedRowsChange={handleRowSelected}
            clearSelectedRows={toggleCleared}
            pagination
            style={{ width: "100%" }}
          />
        </div>
      )}
    </div>
  );
};

export default ReactTableInvoices;
