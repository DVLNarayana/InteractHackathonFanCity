import React from "react";
import { TouchableOpacity, Image } from "./../../components";
import images from "../../assets/images";

const BackButton = props => {
  return (
    <TouchableOpacity
      testID="hLeft"
      style={{
        height: 44,
        width: 44,
        justifyContent: "center",
        alignItems: "center"
      }}
      onPress={() => {
        props.navigation.pop();
      }}
    >
      <Image testID="hLeft_image" source={images.back} />
    </TouchableOpacity>
  );
};

export default BackButton;
