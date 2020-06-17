import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Button,
  TextView,
  TouchableOpacity,
  Image,
} from "../../components";
import styles from "./styles";
import images from "../../assets/images";

const CommentaryItem = (props) => {
  return (
    <View style={styles.container}>
      <TextView h3 style={{ flex: 1, textAlign: "left" }}>{`@ ${
        props.Item.Min || 0
      }min : ${props.Item.Txt}`}</TextView>
      {props.Item.IT && props.Item.IT === 36 && (
        <View
          style={{
            marginHorizontal: 10,
            height: 30,
            width: 30,
            backgroundColor: "green",
          }}
        >
          <Image
            source={images.football}
            style={{ height: 30, weight: 30 }}
            resizeMode="contain"
          />
        </View>
      )}
      {props.Item.IT && props.Item.IT === 43 && (
        <View
          style={{
            marginHorizontal: 20,
            height: 30,
            width: 15,
            backgroundColor: "yellow",
          }}
        />
      )}
      {props.Item.IT && props.Item.IT === 77 && (
        <View
          style={{
            marginHorizontal: 20,
            height: 30,
            width: 15,
            backgroundColor: "red",
          }}
        />
      )}
    </View>
  );
};

CommentaryItem.propTypes = {
  Item: PropTypes.object,
  style: PropTypes.object,
};

export default CommentaryItem;

<View></View>;
