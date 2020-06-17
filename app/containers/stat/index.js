"use strict";

import React from "react";

import { View, Image } from "../../components";
import images from "../../assets/images";

function Stat({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={images.matchSentiment}
        style={{ flex: 1, height: "100%", width: "100%" }}
        resizeMode="contain"
      />
    </View>
  );
}
export default Stat;
