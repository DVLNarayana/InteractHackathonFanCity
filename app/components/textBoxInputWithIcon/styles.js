import { StyleSheet } from "react-native";
import theme from "../../themes";

module.exports = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: theme.COLOR_WHITE,
    borderWidth: 1,
    borderColor: theme.BORDERS_PRIMARY_COLOR,
    borderRadius: 2
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: theme.COLOR_WHITE,
    borderColor: theme.COLOR_TRANSPARENT,
    borderRadius: 2
  },
  onFocusContainerStyle: {
    backgroundColor: theme.TEXTBOX_BORDER_ON_FOCUS_COLOR,
    borderColor: theme.TEXTBOX_BORDER_ON_FOCUS_COLOR
  },
  onFocusContentStyle: {
    borderColor: theme.TEXTBOX_BORDER_ON_FOCUS_COLOR
  },
  textBoxTitle: {
    textAlign: "left",
    marginLeft: 4,
    marginBottom: 4
  },
  textBox: {
    flex: 1,
    height: "100%",
    borderWidth: 0,
    paddingVertical: 5,
    paddingHorizontal: 0,
    alignItems: "flex-start"
  },
  icon: {
    height: "100%",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center"
  }
});
