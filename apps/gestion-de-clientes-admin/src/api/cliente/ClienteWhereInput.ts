import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClienteWhereInput = {
  direcciN?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  telFono?: StringNullableFilter;
};
