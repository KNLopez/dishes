import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";

function RenderDish({ dish }) {
  return dish ? (
    <Card>
      <Card.Image source={{ uri: dish.image }} />
      <Card.Title style={{ margin: 10 }}>{dish.name}</Card.Title>
      <Text>{dish.description}</Text>
    </Card>
  ) : null;
}

function Dishdetail({ route }) {
  const { dishId } = route.params;
  return <RenderDish dish={DISHES[dishId]} />;
}

export default Dishdetail;
