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
import { getNeighborhoods, getZipCode } from "../Store/neighborhood/thunk";
import { useState, useEffect } from "react";
import { current } from "@reduxjs/toolkit";

export const HomePage = () => {
  const dispatch = useDispatch();
  const [postal, setPostal] = useState("");

  //Bare minimum for geolocation
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  //Take another look later

  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [locationStatus, setLocationStatus] = useState("");

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

  // { auth, locate, json }

  useEffect(() => {
    if (currentLatitude) {
      const apiKey = authKey;
      console.log("apikey", apiKey);
      const longitude = currentLongitude;
      const latitude = currentLatitude;
      console.log("latitude", currentLatitude);
      dispatch(getZipCode(latitude, longitude, apiKey));
    } else {
    }
  }, [location]);

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
