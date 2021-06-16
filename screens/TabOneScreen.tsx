import * as React from "react";
import { StyleSheet, Button, TextInput, Alert } from "react-native";
// import {
//   Table,
//   TableWrapper,
//   Row,
//   Rows,
//   Col,
//   Cols,
//   Cell,
// } from "react-native-table-component";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import Colors from "../constants/Colors";

export default function TabOneScreen() {
  const [value, setValue] = React.useState({ email: "", password: "" });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      {/* <Table>
        <Row>
          <td>First Name</td>
        </Row>
      </Table> */}

      <View
        style={styles.separator}
        lightColor="#fff"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>Login</Text>

      <TextInput
        style={styles.input}
        value={value.email}
        onChangeText={(e) => {
          setValue({ email: e, password: value.password });
        }}
      ></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={(e) => {
          setValue({ email: value.email, password: e });
        }}
      ></TextInput>

      <Button
        onPress={() => {
          alert("Entrou");
        }}
        title="Entrar"
      ></Button>
      <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
        Cadastre-se{" "}
      </Text>
      <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
        Esqueci minha senha{" "}
      </Text>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
