import React from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

const Home = () => {
  const RenderItem = ({ item }) => {
    return item ? (
      <Card>
        <Card.Title>{item.name}</Card.Title>
        <Card.FeaturedSubtitle>{item.designation}</Card.FeaturedSubtitle>
        <Card.Image
          source={{ uri: "https://i.ibb.co/pKMx8p7/uthappizza.png" }}
        />
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    ) : null;
  };

  return (
    <ScrollView>
      <RenderItem item={DISHES.filter((dish) => dish.featured)[0]} />
      <RenderItem item={PROMOTIONS.filter((promo) => promo.featured)[0]} />
      <RenderItem item={LEADERS.filter((leader) => leader.featured)[0]} />
    </ScrollView>
  );
};
export default Home;
