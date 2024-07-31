// Installed by "react-uploader".
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

// Initialize once (at the start of your app).
const uploader = Uploader({
  accountId: "FW25bG7",
  apiKey: "public_FW25bG73UKEmqZUJ5a5gbJ2VZbyt",
}); // Your real API key.
const uploaderOptions = {
  multi: true,

  // Comment out this line & use 'onUpdate' instead of
  // 'onComplete' to have the dropzone close after upload.
  showFinishButton: true,

  styles: {
    colors: {
      primary: "#3e6cf8",
      border: "3px solid darkgray",
    },
  },
};

const FileDrop = (props) => (
  <div className="bg-light">
    {console.log(JSON.stringify(props))}
    <UploadDropzone
      key={props.fileUploadkey}
      className="shadow border border-dark"
      uploader={uploader}
      options={uploaderOptions}
      onUpdate={(files) => console.log(files.map((x) => x.fileUrl).join("\n"))}
      // onUpdate={() => props.resetFileUpload()}
      // resetFileUpload
      // I can use "onComplete" to get hte filename
      onComplete={(files) => {
        //alert(JSON.stringify(props.uploadFiles));
        // method used to refresh the UploadFile Box on page.
        console.log(JSON.stringify(props));
        props.uploadFiles(files.map((x) => x.fileUrl).join("\n"));
        //props.handleRefreshFileUpload();

        if (props.submitPayrollConfirm) {
          props.submitPayrollConfirm();
        }

        // CHECKS TO SEE IF REQUEST IS FROM <PAYROLLUPLOAD/>, IF CALL TO SHOW COMPLETE
        if (props.confirmPayrollComplete) {
          //alert("llllllllll");
          props.confirmPayrollComplete();
        }

        if (props.isUploadSuccessful) {
          //alert(props.name);
          props.isUploadSuccessful();
          if (props.name !== "") {
          } else {
            //window.location.reload(false);
          }
        }

        //alert(props.btnShowDriversLicenseComplete);

        let value = null;

        if (props.type) {
          //alert("calling ...");
          props.submitDriversConfirm();
        }
        // THIS METHOD WILL ADD ENTRY TO REQUIREDFORMS COLLECTION TO VALIDATE COMPLETION

        console.log("UPLOAD COMPLETED");
        //props.axiosGetFiles()
        // alert(files.map((x) => x.fileUrl).join("\n"))
        //files.map((x) => props.updateFileURL(x.fileUrl)).join("\n");
        return <h1>File Uploads</h1>;
      }}
      //onComplete={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
      width="100%"
      height="200px"
    />
  </div>
);

export default FileDrop;
