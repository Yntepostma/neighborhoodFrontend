import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import image from "../Pages/images/background.jpg";

export const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
          placeholder="userName"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmailAddress}
          value={emailAddress}
          placeholder="email address"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="zipcode"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  backGround: {},
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
