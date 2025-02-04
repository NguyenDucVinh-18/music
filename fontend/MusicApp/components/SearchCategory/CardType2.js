import React from "react";
import CardType2Item from "./CardType2Item";
import { FlatList, Text, View } from "react-native";

function CardType2(props) {
  const { title, data } = props;
  return (
    <View>
      <Text
        style={{
          color: "#fff",
          fontSize: 19,
          fontWeight: "600",
          marginTop: 20,
          textAlign: "center",
          paddingBottom: 10,
        }}
      >
        {title}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CardType2Item uri={item.uri} text={item.text} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default CardType2;
