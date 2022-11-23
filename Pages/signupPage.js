import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
import image from "./images/Background.jpg";
import { signUp } from "../Store/user/thunk";
import { useDispatch } from "react-redux";

export const SignupPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      userName,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      password,
    };
    console.log("newuser", newUser);
    dispatch(signUp(newUser));
  };

  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="first name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last name"
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
        placeholder="password"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="Phone number"
      />
      <Button title="submit" onPress={handleSubmit} />
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
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
