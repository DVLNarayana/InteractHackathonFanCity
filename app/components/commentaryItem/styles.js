import { StyleSheet } from "react-native";
import theme from "./../../themes";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: theme.BORDERS_SECONDARY_COLOR,
    borderRadius: 4,
    backgroundColor: theme.BACKGROUND_WHITE_COLOR,
  },
});
