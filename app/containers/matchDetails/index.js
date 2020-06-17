"use strict";

import React, { Component } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import { View, ScrollView, WebView } from "../../components";
import styles from "./styles";
import { showAlertMessage, canShowPageBusy } from "../../redux/app/actions";

function MatchDetails({ route, navigation, isOnline, events }) {
  const { eventId } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: events[eventId].T1[0].Nm + " Vs " + events[eventId].T2[0].Nm,
    });
  }, [navigation]);

  React.useEffect(() => {
    
  }, route.params.eventId);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ flex: 1 }}>
          <ScrollView></ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <WebView
            useWebKit={false}
            originWhitelist={["https://"]}
            scalesPageToFit
            style={styles.pdfView}
            source={{
              uri:
                "https://camera.activesite.philips.com/camera/de9c433c0df1f731f9bb9180add755c6",
            }}
          />
        </View>
      </View>
      <View style={{ height: 200 }}></View>
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

export default connect(mapStateToProps, bindActions)(MatchDetails);
