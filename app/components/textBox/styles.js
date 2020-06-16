import { StyleSheet } from "react-native";
import theme from "../../themes";

const themeStyles = StyleSheet.create({
  primary: {
    color: theme.TEXT_PRIMARY_COLOR,
    borderColor: theme.BORDERS_PRIMARY_COLOR,
    borderWidth: 1
  },
  secondary: {
    color: theme.COLOR_SECONDARY,
    borderColor: theme.COLOR_SECONDARY,
    borderWidth: 1
  }
});

const styles = StyleSheet.create({
  base: {
    fontFamily: theme.FONT_FAMILY.book,
    padding: 10,
    justifyContent: "center"
  },
  underlineColor: {
    color: theme.COLOR_TRANSPARENT
  }
});

const Default = themeStyles.primary;

function getSelectedThem(props) {
  const { primary, secondary } = props;
  if (primary) {
    return themeStyles.primary;
  }
  if (secondary) {
    return themeStyles.secondary;
  }
  return Default;
}

const { getFontSize } = theme;

export { styles, getSelectedThem, getFontSize };
