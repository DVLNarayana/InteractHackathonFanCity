import { StyleSheet } from "react-native";
import theme from "./../../themes";

module.exports = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 16,
    maxWidth: 120
  },
  text: {
    color: theme.ACTION_TEXT_COLOR_BLUE
  },
  disableText: {
    color: theme.TEXT_PLACEHOLDER_COLOR
  }
});
