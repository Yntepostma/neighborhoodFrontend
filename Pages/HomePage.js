import * as Location from "expo-location";
import { PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-maps";
import { LocationSelector } from "../Components";
import { useSelector } from "react-redux";
import { selectLocation } from "../Store/neighborhood/selector";
import { authKey } from "../config";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Dimensions,
} from "react-native";
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
  console.log("location", currentLocation);

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
    if (location) {
      const apiKey = authKey;
      const longitude = currentLongitude;
      const latitude = currentLatitude;
      dispatch(getZipCode(latitude, longitude, apiKey));
    } else {
    }
  }, [location]);

  useEffect(() => {
    if (currentLocation.length > 0) {
      alertLocation();
    }
  }, [currentLocation]);

  const alertLocation = () => {
    Alert.alert(
      `Welcome to NeighborHood!`,
      `Street: ${currentLocation[0].street} ${""} 
      Zipcode: ${currentLocation[0].postcode} ${""}
      Neighborhood: ${currentLocation[0].suburb}
      ${(<MapView provider={PROVIDER_GOOGLE} />)} 
    
`,
      [
        {
          text: "Add Neighborhood",
          style: "ok",
        },
        {
          text: "Choose manually",
          style: "cancel",
        },
      ]
    );
  };

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
      <MapView provider={PROVIDER_GOOGLE} />
      <TextInput
        style={styles.input}
        onChangeText={setPostal}
        value={postal}
        placeholder="zipcode"
      />
      <View>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
