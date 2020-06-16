import { StyleSheet } from "react-native";
import theme from "../../themes";

const Base = StyleSheet.create({
  text: {
    backgroundColor: "rgba(0,0,0,0)",
    textAlign: "center"
  }
});

const Primary = StyleSheet.create({
  color: {
    color: theme.TEXT_PRIMARY_COLOR
  }
});

const Secondary = StyleSheet.create({
  color: {
    color: theme.TEXT_SECONDARY_COLOR
  }
});

const Default = Primary;

function getSelectedTheme(props) {
  const { primary, secondary } = props;
  if (primary) {
    return Primary;
  }
  if (secondary) {
    return Secondary;
  }
  return Default;
}

function getFontFamily(props) {
  const { bold, header } = props;
  if (header) {
    return {
      fontFamily: theme.FONT_FAMILY.header
    };
  }
  if (bold) {
    return {
      fontFamily: theme.FONT_FAMILY.bold
    };
  }

  return {
    fontFamily: theme.FONT_FAMILY.book
  };
}

const { getFontSize } = theme;

export { Base, getSelectedTheme, getFontSize, getFontFamily };
