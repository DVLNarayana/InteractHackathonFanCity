import { StyleSheet } from "react-native";
import theme from "./../../themes";

module.exports = StyleSheet.create({
  container: {
    marginVertical: 11,
    marginHorizontal: 7,
    borderWidth: 1,
    borderColor: theme.BORDERS_SECONDARY_COLOR,
    borderRadius: 4,
    backgroundColor: theme.BACKGROUND_WHITE_COLOR,
  },
  partDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 120,
    paddingHorizontal: 17,
  },
  img: {
    flex: 1,
    height: 100,
    width: 100,
  },
});
