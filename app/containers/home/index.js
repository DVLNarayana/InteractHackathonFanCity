"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  HeaderButton,
  Modal,
  TextBoxInputWithIcon,
  TextView,
  HeaderForModal,
} from "../../components";
import styles from "./styles";
import { showAlertMessage, canShowPageBusy } from "../../redux/app/actions";
import images from "../../assets/images";

function HomeScreen({ navigation, isOnline }) {
  const [showNewMatchModal, canShowNewMatchModal] = React.useState(false);
  const [category, setCategory] = React.useState("soccer");
  const [eventId, setEventId] = React.useState("3081629");
  const [p, setP] = React.useState("1");
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          testID="btnNewGroup"
          onPress={() => {
            canShowNewMatchModal(true);
          }}
          text="Add"
        />
      ),
    });
  }, [navigation]);

  const onClickCancel = () => {
    canShowNewMatchModal(false);
  };

  const onClickDone = () => {
    console.log("isOnline : ", isOnline);
  };

  return (
    <View testID="HomeScreen" style={styles.container}>
      <Modal
        testID="ModalNewMatch"
        transparent
        animationType="slide"
        visible={showNewMatchModal}
        onRequestClose={() => {}}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          <HeaderForModal
            testID="mhManual"
            title="New Match"
            leftButtonText="Cancel"
            onLeftButtonClick={onClickCancel}
            rightButtonText="Done"
            onRightButtonClick={onClickDone}
          />
          <View testID="ManulaEntryContainer" style={styles.content}>
            <TextBoxInputWithIcon
              textBoxTitle="Category"
              textBoxTitleStyle={styles.textBoxTitle}
              value={category}
              autoFocus
              placeholder="Enter category"
              style={styles.input}
              onChangeText={(category) => setCategory(category)}
              leftIconImageSource={category.length > 0 && images.cross}
              onClickLeftIcon={() => setCategory("")}
              returnKeyType="done"
              enablesReturnKeyAutomatically
            />
            <TextBoxInputWithIcon
              textBoxTitle="Event ID"
              textBoxTitleStyle={styles.textBoxTitle}
              value={eventId}
              autoFocus
              placeholder="Enter category"
              style={styles.input}
              onChangeText={(category) => setEventId(category)}
              leftIconImageSource={eventId.length > 0 && images.cross}
              onClickLeftIcon={() => setEventId("")}
              returnKeyType="done"
              enablesReturnKeyAutomatically
            />
            <TextBoxInputWithIcon
              textBoxTitle="P"
              textBoxTitleStyle={styles.textBoxTitle}
              value={p}
              autoFocus1
              placeholder="Enter category"
              style={styles.input}
              onChangeText={(category) => setP(category)}
              leftIconImageSource={p.length > 0 && images.cross}
              onClickLeftIcon={() => setP("")}
              returnKeyType="done"
              enablesReturnKeyAutomatically
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const mapStateToProps = (state) => ({
  isOnline: state.network.isOnline,
  events: state.events,
});

export const bindActions = (dispatch) => {
  return {
    showAlertMessage: (header, message, onPress) =>
      dispatch(showAlertMessage(header, message, onPress)),
    canShowPageBusy: (status) => dispatch(canShowPageBusy(status)),
  };
};

export default connect(mapStateToProps, bindActions)(HomeScreen);
