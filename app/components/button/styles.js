import { StyleSheet } from "react-native";
import theme from "../../themes";

const Base = StyleSheet.create({
  main: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "stretch",
    height: 50
  }
});

const Primary = StyleSheet.create({
  main: {
    backgroundColor: theme.BACKGROUND_BUTTON_PRIMARY,
    borderColor: theme.BACKGROUND_BUTTON_PRIMARY,
    borderWidth: 2
  },
  mainDisable: {
    backgroundColor: theme.BACKGROUND_BUTTON_PRIMARY_OPACITY_40
  },
  buttonPress: {
    backgroundColor: theme.BACKGROUND_BUTTON_PRIMARY_PRESSED,
    borderColor: theme.BACKGROUND_BUTTON_PRIMARY_PRESSED,
    borderWidth: 2
  },
  label: {
    color: theme.TEXT_PRIMARY_COLOR,
    fontFamily: theme.FONT_FAMILY.bold,
    marginVertical: 12,
    marginHorizontal: 24
  },
  labelDisable: {
    color: theme.TEXT_PRIMARY_COLOR_OPACITY_40,
    fontFamily: theme.FONT_FAMILY.bold,
    marginVertical: 12,
    marginHorizontal: 24
  }
});

const Secondary = StyleSheet.create({
  main: {
    backgroundColor: "transparent",
    borderColor: theme.BACKGROUND_BUTTON_PRIMARY,
    borderWidth: 2
  },
  buttonPress: {
    borderColor: theme.BACKGROUND_BUTTON_PRIMARY_PRESSED,
    borderWidth: 2
  },
  label: {
    color: theme.TEXT_PRIMARY_COLOR,
    fontFamily: theme.FONT_FAMILY.bold,
    marginVertical: 12,
    marginHorizontal: 24
  }
});

const Quiet = StyleSheet.create({
  main: {
    backgroundColor: "transparent"
  },
  buttonPress: {
    backgroundColor: theme.BORDERS_SECONDARY_COLOR
  },
  label: {
    color: theme.TEXT_PRIMARY_COLOR,
    fontFamily: theme.FONT_FAMILY.book,
    marginVertical: 12,
    marginHorizontal: 24
  }
});

const Default = StyleSheet.create({
  main: {
    backgroundColor: "transparent"
  },
  label: {
    color: theme.ACTION_TEXT_COLOR_BLUE
  }
});

function getSelectedTheme(props) {
  const { primary, secondary, quiet } = props;
  if (primary) {
    return Primary;
  }
  if (secondary) {
    return Secondary;
  }
  if (quiet) {
    return Quiet;
  }
  return Default;
}

const { getFontSize } = theme;

export { Base, getSelectedTheme, getFontSize };
