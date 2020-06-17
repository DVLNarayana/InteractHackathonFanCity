import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { View, WebView } from "../../components";
import styles from "./styles";

const LiveCam = (props) => {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["https://"]}
        scalesPageToFit
        source={{
          uri:
            "https://camera.activesite.philips.com/camera/de9c433c0df1f731f9bb9180add755c6",
        }}
      />
    </View>
  );
};

LiveCam.propTypes = {
  Item: PropTypes.object,
  style: PropTypes.object,
};

export default LiveCam;
