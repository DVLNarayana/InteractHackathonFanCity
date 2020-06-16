import React from "react";
import PropTypes from "prop-types";
import { Button, TextView } from "../../components";
import styles from "./styles";

const HeaderButton = props => {
  return (
    <Button
      testID={props.testID}
      disabled={props.disable}
      style={styles.container}
      onPress={props.onPress}
    >
      {props.text ? (
        <TextView
          extras={{ ellipsizeMode: "tail", numberOfLines: 1 }}
          style={
            props.disable ? styles.disableText : [styles.text, props.style]
          }
        >
          {props.text}
        </TextView>
      ) : (
        props.children
      )}
    </Button>
  );
};

HeaderButton.propTypes = {
  testID: PropTypes.string,
  text: PropTypes.string,
  disable: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.object
};

HeaderButton.defaultProps = {
  testID: "hButton",
  disable: false
};

export default HeaderButton;
