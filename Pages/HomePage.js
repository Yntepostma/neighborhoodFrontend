import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  PermissionsAndroid,
  Platform,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { getNeighborhoods } from "../Store/neighborhood/thunk";
import { useState, useEffect } from "react";
import Geolocation from "@react-native-community/geolocation";

export const HomePage = () => {
  const dispatch = useDispatch();
  const [postal, setPostal] = useState("");
  const [currentLongtitute, setCurrentLongtitute] = useState("");
  const [currentLatitute, setCurrentLatitude] = useState("");
  const [locationStatus, setLocationStatus] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setPostal}
        value={postal}
        placeholder="zipcode"
      />
      <Button
        title="get Neighborhood"
        onPress={() => dispatch(getNeighborhoods(postal))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
  },
});
