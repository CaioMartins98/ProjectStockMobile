import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, TextInput, Alert, Image } from "react-native";
import { Icon, Button, Content, Form, Item, Label, Input } from "native-base";
// import iconTheme from '../assets/images/title.png'
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
// import {Button, Text } from "native-base";
import Colors from "../constants/Colors";

export default function Login() {
  const [value, setValue] = React.useState({ email: "", password: "" });

  const navigation = useNavigation();
  const changeToScreen = () => {
    navigation.navigate("TabTwo");
  };

  const changeToScreenCadastro = () => {
    navigation.navigate("Cadastro");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/title.png")}></Image>

      <View
        style={styles.separator}
        lightColor="#fff"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <Text style={styles.label}>Login</Text> */}

      <Item stackedLabel>
        <Label>E-mail</Label>
        <Input style={styles.input} />
      </Item>
      <Item stackedLabel last>
        <Label>Senha</Label>
        <Input secureTextEntry={true} style={styles.input} />
      </Item>

      <Button
        style={styles.button}
        light
        iconRight
        onPress={() => changeToScreen()}
      >
        <Text style={{ fontSize: 16, marginHorizontal: 10 }}>ENTRAR</Text>

        <Icon
          name="arrow-forward"
          style={{ fontSize: 20, color: "white", marginVertical: 15 }}
        />
      </Button>
      <Text
        onPress={() => changeToScreenCadastro()}
        style={styles.helpLinkText}
        lightColor={Colors.light.tint}
      >
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
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  label: {
    fontSize: 25,
    marginVertical: 20,
  },
  input: {
    height: 190,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "transparent",
    width: 190,
    // marginVertical: 50,
    color: "white",
    marginVertical: 10,
  },
  helpLink: {
    // paddingTop: "10px",
    // paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
    marginVertical: 5,
    color: "#3AB0FF",
  },
  button: {
    width: "56%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginHorizontal: 80,
    marginVertical: 40,
  },
});
