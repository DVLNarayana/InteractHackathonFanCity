import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Base, getSelectedTheme, getFontSize, getFontFamily } from "./styles";

const TextView = props => {
  const theme = getSelectedTheme(props);
  const fontSize = getFontSize(props);
  const fontFamily = getFontFamily(props);
  return (
    <Text
      testID={props.testID}
      onPress={props.onPress}
      style={[Base.text, theme.color, fontSize, fontFamily, props.style]}
      {...props.extras}
    >
      {props.children}
    </Text>
  );
};

TextView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number
  ]),
  testID: PropTypes.string,
  key: PropTypes.string,
  extras: PropTypes.object,
  onPress: PropTypes.func
};

export default TextView;
