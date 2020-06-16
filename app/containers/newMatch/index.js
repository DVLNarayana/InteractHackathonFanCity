"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import { View, HeaderButton, Modal } from "../../components";
import styles from "./styles";
import { showAlertMessage, canShowPageBusy } from "../../redux/app/actions";

function NewMatch({ navigation }) {
  const [showNewMatchModal, canShowNewMatchModal] = React.useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          testID="btnNewGroup"
          onPress={() => {
            canShowNewMatchModal(true);
          }}
          title="Add"
        />
      ),
    });
  }, [navigation]);
  return <View testID="HomeScreen" style={styles.container}></View>;
}

const mapStateToProps = (state) => ({
  isOnline: state.network.isOnline,
});

export const bindActions = (dispatch) => {
  return {
    showAlertMessage: (header, message, onPress) =>
      dispatch(showAlertMessage(header, message, onPress)),
    canShowPageBusy: (status) => dispatch(canShowPageBusy(status)),
  };
};

export default connect(mapStateToProps, bindActions)(NewMatch);
