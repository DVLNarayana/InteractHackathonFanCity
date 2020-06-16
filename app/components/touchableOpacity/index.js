import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import _ from "lodash";

const TouchableOpacityView = props => {
  const onPressFunc = () => {
    props.onPress && props.onPress();
  };

  const onPressDelay = _.debounce(onPressFunc, 1000, {
    leading: true,
    trailing: false
  });

  return (
    <TouchableOpacity
      {...props}
      accessibilityComponentType="button"
      testID={props.testID}
      onPress={onPressDelay}
      activeOpacity={props.activeOpacity || 0.5}
    >
      {props.children}
    </TouchableOpacity>
  );
};

TouchableOpacityView.propTypes = {
  testID: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number
};

TouchableOpacityView.defaultPropTypes = {
  testID: "button"
};

export default TouchableOpacityView;
