import React from "react";
import { View, Text, ImageBackground, Button } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory "}
          onPress={() => {
            console.warn("Exsiting Inventory pressed");
          }}
        />
      </View>
    </View>
  );
};
export default CarItem;
