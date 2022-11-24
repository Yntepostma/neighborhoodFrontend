import * as Location from "expo-location";
import { LocationSelector } from "../Components";
import { useSelector } from "react-redux";
import { selectLocation } from "../Store/neighborhood/selector";
import { authKey } from "../config";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useDispatch } from "react-redux";
import {
  getNeighborhoods,
  getZipCode,
  getSuggestedNeighborhood,
} from "../Store/neighborhood/thunk";

import { useState, useEffect } from "react";

export const HomePage = () => {
  const dispatch = useDispatch();
  const currentLocation = useSelector(selectLocation);
  console.log("current location", currentLocation[0].street);

  const [postal, setPostal] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setCurrentLatitude(location.coords.latitude);
      setCurrentLongitude(location.coords.longitude);
    })();
  }, []);

  useEffect(() => {
    if (currentLatitude) {
      const apiKey = authKey;
      const longitude = currentLongitude;
      const latitude = currentLatitude;
      dispatch(getZipCode(latitude, longitude, apiKey));
    } else {
    }
  }, [location]);

  const alertLocation = () => {
    Alert.alert(
      `Welcome to NeighborHood!`,
      `Street: ${currentLocation[0].street} ${""} Zipcode: ${
        currentLocation[0].postcode
      } ${""}
      Neighborhood: ${currentLocation[0].suburb}`,
      [
        {
          text: "Add Neighborhood",
        },
        {
          text: "Choose manually",
        },
      ]
    );
  };

  useEffect(() => {
    alertLocation();
  }, []);

  // useEffect(() => {
  //   if (currentZipCode.length > 0) {
  //     dispatch(getNeighborhoods(currentZipCode[0]));
  //   } else {
  //     console.log("nothing here to see");
  //   }
  // }, []);
  // console.log(currentZipCode, "this is the zipcode");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setPostal}
        value={postal}
        placeholder="zipcode"
      />
      <View>
        <View>
          <Text>
            Your current location is:
            {!currentLocation
              ? "Loading"
              : `
          Street: ${currentLocation[0].street}
          Zipcode: ${currentLocation[0].postcode}`}
          </Text>
          <Button title="add"></Button>
          <Button title="choose manual"></Button>
        </View>
        <Button
          title="get Neighborhood"
          onPress={() => dispatch(getNeighborhoods(postal))}
        />
      </View>
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
