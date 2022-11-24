import { View, Text, Button } from "react-native";

export const LocationSelector = ({ street, housenumber, city }) => {
  return (
    <View>
      <Text>Street: {street}</Text>
      <Text>Housenumber: {housenumber}</Text>
      <Text>City: {city}</Text>
      <View>
        <Text>Add this neighborhood?</Text>
        <Button title="Yes"></Button> <Button title="manual selection"></Button>
      </View>
    </View>
  );
};
