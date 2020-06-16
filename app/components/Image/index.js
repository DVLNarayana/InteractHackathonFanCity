import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import images from "../../assets/images";

const STImage = props => {
  return props.disableDefaultImage ? (
    <Image
      testID={props.testID}
      source={props.source}
      resizeMode={props.resizeMode}
      style={props.style}
    >
      {props.children}
    </Image>
  ) : (
    <Image
      testID={props.testID}
      source={props.source}
      resizeMode={props.resizeMode}
      style={props.style}
      defaultSource={images.noImage}
    >
      {props.children}
    </Image>
  );
};

STImage.propTypes = {
  testID: PropTypes.string,
  resizeMode: PropTypes.string,
  source: PropTypes.any,
  children: PropTypes.any,
  disableDefaultImage: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number
  ])
};

STImage.defaultProps = {
  testID: "image"
};

export default STImage;
