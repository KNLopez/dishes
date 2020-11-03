import React from "react";
import { View, FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { DISHES } from "../shared/dishes";

const Menu = ({ navigation }) => {
  const renderMenuItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        bottomDivider
        onPress={() => navigation.navigate("Detail", { dishId: item.id })}
      >
        <Avatar source={{ uri: item.image }} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={DISHES}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Menu;
