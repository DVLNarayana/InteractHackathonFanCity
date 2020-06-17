"use strict";

import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import {
  View,
  HeaderButton,
  Modal,
  TextBoxInputWithIcon,
  ScrollView,
  HeaderForModal,
  MatchItem,
} from "../../components";
import styles from "./styles";
import { showAlertMessage, canShowPageBusy } from "../../redux/app/actions";
import { getMatchDetails } from "../../redux/events/actions";
import images from "../../assets/images";

function HomeScreen({ navigation, isOnline, events, getMatchDetails }) {
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
    if (isOnline) {
      console.log("Internet connection available");
      getMatchDetails(category, eventId, p).done(() => {
        canShowNewMatchModal(false);
      });
    } else {
      showAlertMessage("Check your Internet connection");
    }
  };

  return (
    <View testID="HomeScreen" style={styles.container}>
      <ScrollView style={[styles.container]}>
        {Object.keys(events).map((key, index) => {
          return (
            <MatchItem
              key={key}
              Item={events[key]}
              onClickItem={() => {
                navigation.navigate("MatchDetails", {
                  eventId: key,
                });
              }}
            />
          );
        })}
      </ScrollView>
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
  events: state.events.eventsCollactions,
});

export const bindActions = (dispatch) => {
  return {
    showAlertMessage: (header, message, onPress) =>
      dispatch(showAlertMessage(header, message, onPress)),
    canShowPageBusy: (status) => dispatch(canShowPageBusy(status)),
    getMatchDetails: (category, eventId, p) =>
      dispatch(getMatchDetails(category, eventId, p)),
  };
};

export default connect(mapStateToProps, bindActions)(HomeScreen);
