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
const MatchItem = (props) => {
  console.log("MatchItem props : ", props);

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClickItem}>
      <View style={styles.partDetailsContainer}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Image
            source={images.teamImages[props.Item.T1[0]["ID"]]}
            style={styles.img}
            resizeMode="contain"
          />
          <TextView h1>{props.Item.T1[0].Nm}</TextView>
        </View>
        <TextView h1 style={{ marginHorizontal: 50 }}>
          Vs
        </TextView>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <TextView h1>{props.Item.T2[0].Nm}</TextView>
          <Image
            source={images.teamImages[props.Item.T2[0]["ID"]]}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{ height: 30, flexDirection: "row", justifyContent: "center" }}
      >
        <TextView
          h4
        >{`venue : ${props.Item.Stg.Snm}, ${props.Item.Stg.Cnm} on 06th June 2020`}</TextView>
      </View>
    </TouchableOpacity>
  );
};

MatchItem.propTypes = {
  Item: PropTypes.object,
  style: PropTypes.object,
  onClickItem: PropTypes.func,
};

export default MatchItem;
