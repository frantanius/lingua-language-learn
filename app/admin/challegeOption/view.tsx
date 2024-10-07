import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  BooleanField,
  NumberField,
} from "react-admin";

export default function ViewChallengeOption() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="text" />
        <BooleanField source="correct" />
        <ReferenceField source="challengeId" reference="challenges" />
        <TextField source="imageSrc" />
        <TextField source="audioSrc" />
      </Datagrid>
    </List>
  );
}