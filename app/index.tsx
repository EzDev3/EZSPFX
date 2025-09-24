import { createSite } from "@/utils/sharepoint/createSite";
import React from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [orgName, setOrgName] = React.useState("");

  const handleSubmit = () => {
    if (orgName?.trim()) {
      createSite(orgName)
      Alert.alert("Submitted Values", `First: ${orgName}`);
    } else {
      Alert.alert('Invalid Name', 'Please Enter A valid Organization Name')
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Create Organization</Text>
      {/* First Text Field */}
      <TextInput
        placeholder="Enter organization name"
        value={orgName}
        onChangeText={setOrgName}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 10,
          paddingHorizontal: 10,
          width: "80%",
        }}
      />

      <View style={{ marginTop: 20, width: "80%" }}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>

    </View>
  );
}
