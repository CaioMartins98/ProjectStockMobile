import * as React from "react";
import { StyleSheet } from "react-native";
import {
  Icon,
  Body,
  Button,
  Content,
  Form,
  Item,
  Label,
  Input,
  H1,
} from "native-base";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";

export default function CadastroScreen() {
  const navigation = useNavigation();
  const Back = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Icon
        style={{ fontSize: 20, color: "white", marginVertical: 15 }}
        name="person"
      >
        +
      </Icon>

      <Content>
        <Item stackedLabel>
          <Label>Nome Empresa</Label>
          <Input style={styles.input} />
        </Item>
        <Item stackedLabel>
          <Label>E-mail</Label>
          <Input style={styles.input} />
        </Item>
        <Item stackedLabel>
          <Label>CPF/CNPJ Empresa</Label>
          <Input style={styles.input} />
        </Item>
        <Item stackedLabel>
          <Label>Telefone</Label>
          <Input style={styles.input} />
        </Item>

        <Item stackedLabel>
          <Label>Senha</Label>
          <Input style={styles.input} secureTextEntry={true} />
        </Item>
        <Item stackedLabel last>
          <Label>Confirmar Senha</Label>
          <Input secureTextEntry={true} style={styles.input} />
        </Item>
      </Content>
      <Button
        style={styles.button}
        success

        // onPress={() => changeToScreen()}
      >
        <Text style={{ fontSize: 16, color: "white", marginHorizontal: 10 }}>
          Cadastrar
        </Text>
      </Button>

      <Text
        onPress={() => Back()}
        style={styles.helpLinkText}
        lightColor={Colors.light.tint}
      >
        {/* <Icon name="arrow-back" style={{ fontSize: 20, color: "white" }} /> */}
        Voltar
      </Text>
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
    fontSize: 29,
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 10,
    color: "white",
  },
  helpLinkText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 14,
    color: "#D5D5D5D5",
  },
  button: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginHorizontal: 90,
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 0,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "transparent",
    width: 200,
    // marginVertical: 50,
    color: "white",
    marginVertical: 10,
  },
});
