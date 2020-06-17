"use strict";

import React, { Component } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import {
  View,
  ScrollView,
  CommentaryItem,
  HeaderButton,
} from "../../components";
import styles from "./styles";
import { showAlertMessage, canShowPageBusy } from "../../redux/app/actions";
import {
  getCommentaryEntries,
  generateLandmarkAccessToken,
  getConnectionStatus,
} from "../../redux/eventDetails/actions";
function MatchDetails({
  route,
  navigation,
  isOnline,
  event,
  getCommentaryEntries,
  eventCommentaries,
}) {
  const { eventId } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: event.T1[0].Nm + " Vs " + event.T2[0].Nm,
      headerRight: () => (
        <HeaderButton
          onPress={() => {
            navigation.navigate("Stat");
          }}
          text="Statistics"
        />
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    if (eventCommentaries.length === 0) {
      getCommentaryEntries(route.params.eventId);
    }
  }, route.params.eventId);

  React.useEffect(() => {
    console.log("updated the comments .... ", eventCommentaries.length);
  }, eventCommentaries);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            {eventCommentaries.map((commEntry, index) => {
              return <CommentaryItem key={index} Item={commEntry} />;
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state, props) => {
  console.log("mapStateToProps props: ");
  return {
    isOnline: state.network.isOnline,
    event: state.events.eventsCollactions[props.route.params.eventId],
    eventCommentaries:
      state.eventsDetails.eventsCommentaries[props.route.params.eventId] || [],
  };
};

export const bindActions = (dispatch) => {
  return {
    showAlertMessage: (header, message, onPress) =>
      dispatch(showAlertMessage(header, message, onPress)),
    canShowPageBusy: (status) => dispatch(canShowPageBusy(status)),
    getCommentaryEntries: (eventId) => dispatch(getCommentaryEntries(eventId)),
    generateLandmarkAccessToken: () => dispatch(generateLandmarkAccessToken()),
    getConnectionStatus: () => dispatch(getConnectionStatus()),
  };
};

export default connect(mapStateToProps, bindActions)(MatchDetails);
