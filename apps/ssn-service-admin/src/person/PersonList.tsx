import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PersonList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"People"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="birthdate" source="birthdate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="faceScan" source="faceScan" />
        <TextField label="familyTree" source="familyTree" />
        <TextField label="fingerPrintScan" source="fingerPrintScan" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="ssnNumber" source="ssnNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
