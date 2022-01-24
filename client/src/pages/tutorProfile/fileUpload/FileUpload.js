import { useFilePicker } from 'use-file-picker';
import React from 'react';
import { useDispatch } from "react-redux";
import { uploadFile } from "../../../core/actionCreators/fileUpload";

export default function FileUpload() {
  const dispatch = useDispatch();
  const [openFileSelector, { filesContent, loading, errors, plainFiles, clear }] = useFilePicker({
    multiple: true,
    readAs: 'DataURL', // availible formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
    // accept: '.ics,.pdf',
    accept: ['.pdf'],
    limitFilesConfig: { min: 1, max: 1 },
    // minFileSize: 1, // in megabytes
    // maxFileSize: 1,
    // readFilesContent: false, // ignores file content
  });


//function to upload file
  const submitFile = (e) => {
  //  const data = new FormData() 
  //  data.append('file', e)
   console.log(e);
   dispatch(uploadFile(e));
  };



  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <br />
      <button className="btn btn-group-sm btn-info" style={{margin:"5px"}} onClick={() => openFileSelector()}> Select file </button>
       <button className="btn btn-group-sm btn-success" style={{margin:"5px"}} onClick={()  => submitFile(plainFiles[0])}> Upload </button>
      <button className="btn btn-group-sm btn-danger" style={{margin:"5px"}} onClick={() => clear()}> Clear </button>
      <br />
      Name of selected file:
      {plainFiles.length}
      <br />
      {plainFiles.map(file => (
        <div key={file.name}>{file.name}</div>
      ))}
    </div>
  );
}