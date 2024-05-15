import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ClienteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Dirección" multiline source="direcciN" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Nombre" source="nombre" />
        <TextInput label="Teléfono" source="telFono" />
      </SimpleForm>
    </Create>
  );
};
