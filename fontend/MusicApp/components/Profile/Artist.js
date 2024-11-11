import React from "react";
import ArtistItem from "./ArtistItem";
import { FlatList, Text, View } from "react-native";

function Artist(props) {
  const { title, data } = props;
  return (
    <View>
      <Text
        style={{
          color: "#fff",
          fontSize: 19,
          fontWeight: "600",
          // marginTop: 20,
        }}
      >
        {title}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ArtistItem uri={item.uri} name={item.name} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

export default Artist;
