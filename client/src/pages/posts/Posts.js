// @flow
import React from "react";
// import { DataGrid } from "@mui/x-data-grid";
import Page from "../../components/page/Page";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
  },
];

const rows = [{ id: 1, lastName: "Nisha", firstName: "Devi", age: 22 }];

export default function Posts() {
  return <Page></Page>;
  /*
  return (
    <Page>
      <DataGrid rows={rows} columns={columns} pageSize={7} autoHeight />
    </Page>
  );
  */
}
