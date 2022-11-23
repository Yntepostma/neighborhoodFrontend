import * as Location from "expo-location";
import { useSelector } from "react-redux";
import { selectLocation } from "../Store/neighborhood/selector";
import { authKey } from "../config";
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
import {
  getNeighborhoods,
  getZipCode,
  getSuggestedNeighborhood,
} from "../Store/neighborhood/thunk";

import { useState, useEffect } from "react";

import { current } from "@reduxjs/toolkit";

export const HomePage = () => {
  const dispatch = useDispatch();
  const currentLocation = useSelector(selectLocation);
  const currentZipCode = currentLocation.map((item) => item.postcode);

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
      // console.log("latitude", currentLatitude);
      dispatch(getZipCode(latitude, longitude, apiKey));
    } else {
    }
  }, [location]);

  useEffect(() => {
    if (currentZipCode.length > 0) {
      dispatch(getNeighborhoods(currentZipCode[0]));
    } else {
      console.log("nothing here to see");
    }
  }, []);
  console.log(currentZipCode, "this is the zipcode");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setPostal}
        value={postal}
        placeholder="zipcode"
      />
      <Text>
        Your current location is: {currentLocation.map((item) => item.postcode)}
      </Text>
      <Text></Text>
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
