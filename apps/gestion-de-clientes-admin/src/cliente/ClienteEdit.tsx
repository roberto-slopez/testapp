import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ClienteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Dirección" multiline source="direcciN" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Nombre" source="nombre" />
        <TextInput label="Teléfono" source="telFono" />
      </SimpleForm>
    </Edit>
  );
};
