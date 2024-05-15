import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClienteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Clientes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Dirección" source="direcciN" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre" source="nombre" />
        <TextField label="Teléfono" source="telFono" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
