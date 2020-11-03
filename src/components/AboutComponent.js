import React from "react";
import { Card, ListItem, Avatar } from "react-native-elements";
import { Text, ScrollView, FlatList } from "react-native";
import { LEADERS } from "../shared/leaders";

const History = () => {
  return (
    <Card>
      <Card.Title>Our History</Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 20 }}>
        Started in 2010, Ristorante con Fusion quickly established itself as a
        culinary icon par excellence in Hong Kong. With its unique brand of
        world fusion cuisine that can be found nowhere else, it enjoys patronage
        from the A-list clientele in Hong Kong. Featuring four of the best
        three-star Michelin chefs in the world, you never know what will arrive
        on your plate the next time you visit us.
      </Text>
      <Text>
        The restaurant traces its humble beginnings to The Frying Pan, a
        successful chain started by our CEO, Mr. Peter Pan, that featured for
        the first time the world's best cuisines in a pan.
      </Text>
    </Card>
  );
};

const AboutUs = () => {
  const renderLeaderItem = ({ item }) => {
    return (
      <ListItem bottomDivider>
        <Avatar
          source={{ uri: "https://i.ibb.co/MPKPjyM/alberto.png" }}
          rounded
        />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  const renderLeadership = () => {
    return (
      <Card>
        <Card.Title>Corporate Leadership</Card.Title>
        <Card.Divider />
        <FlatList
          data={LEADERS}
          renderItem={renderLeaderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    );
  };

  return (
    <ScrollView>
      <History />
      {renderLeadership()}
    </ScrollView>
  );
};

export default AboutUs;
