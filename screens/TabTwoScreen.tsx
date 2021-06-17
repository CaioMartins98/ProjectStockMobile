import * as React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  SwipeRow,
  Icon,
  Button,
  Item,
  Input,
} from "native-base";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <Container>
      <Header style={{ marginVertical: -10 }} />

      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>

      <Content scrollEnabled={false}>
        <SwipeRow
          leftOpenValue={75}
          rightOpenValue={-75}
          left={
            <Button info onPress={() => alert("Add")}>
              <Icon active name="information-circle" />
            </Button>
          }
          body={
            <View>
              <Text style={{ color: "black", backgroundColor: "white" }}>
                Lapiseira Faber Castel
              </Text>
            </View>
          }
          right={
            <Button light onPress={() => alert("Trash")}>
              <Icon active name="cog" style={{ color: "white" }} />
            </Button>
          }
        />
      </Content>
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
