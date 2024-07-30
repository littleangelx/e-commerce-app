import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";

const Home = () => {
  const categories = [
    { category: "Nice", _id: 1 },
    { category: "Nice", _id: 2 },
    { category: "Nice", _id: 3 },
  ];

  return (
    <View style={defaultStyle}>
      <Header />

      <View
        style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
        </View>

        {/* Search bar */}
        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={"magnify"}
              color={"gray"}
              size={50}
              style={{ backgroundColor: colors.color2, elevation: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", height: 80 }}>
        {categories.map((item, index) => (
          <Button
            key={item._id}
            style={{
              backgroundColor: colors.color5,
              borderRadius: 100,
              margin: 5,
            }}
          >
            <Text style={{ fontSize: 12, color: "gray" }}>{item.category}</Text>
          </Button>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
