import { View, Text, SafeAreaView, TextInput } from "react-native";
import { useState, useEffect } from "react";

export const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
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
        <TextInput
          style={styles.input}
          onChangeText={setPostal}
          value={postal}
          placeholder="zipcode"
        />
      </SafeAreaView>
    </View>
  );
};
