import { StyleSheet } from "react-native";
import theme from "../../themes";
import { deviceWidth } from "../../utils/constants";

module.exports = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: theme.BACKGROUND_SECONDARY_COLOR,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.BORDERS_HEADER_COLOR
  },
  content: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center"
  },
  showRightIconButton: {
    width: 88,
    height: 44,
    paddingRight: 16,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  showLeftIconButton: {
    width: 88,
    height: 44,
    paddingLeft: 16,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  hideIconButton: {
    width: 0,
    height: 0
  },
  makeTitleCenter: {
    marginLeft: -60
  },
  title: {
    maxWidth: deviceWidth - 2 * 88,
    fontFamily: theme.FONT_FAMILY.header
  },
  buttonTextStyle: {
    color: theme.ACTION_TEXT_COLOR_BLUE
  }
});
