import { Platform, StyleSheet } from "react-native";

const majorVersionIOS = parseInt(Platform.Version, 10);
const paddingTop = majorVersionIOS < 11 ? 20 : 0;

const fontSizes = StyleSheet.create({
  h1: {
    fontSize: 24
  },
  h2: {
    fontSize: 22
  },
  h3: {
    fontSize: 20
  },
  h4: {
    fontSize: 18
  },
  h5: {
    fontSize: 16
  },
  h6: {
    fontSize: 14
  },
  h7: {
    fontSize: 12
  },
  h8: {
    fontSize: 10
  },
  defaultFontSize: {
    fontSize: 18
  }
});

export default {
  colors: {
    white: "#FFFFFF",
    transparent: "rgba(0,0,0,0)",
    active: "#42C9FF",
    inActive: "#FFFFFF",
    error: "#FFDB1F",
    blue: "#0D3459",
    blue50: "#0D345950"
  },
  //Color
  BACKGROUND_PRIMARY_COLOR: "#1474A4",
  BACKGROUND_SECONDARY_COLOR: "#BFE2EB",
  BACKGROUND_WHITE_COLOR: "#FFFFFF",
  BACKGROUND_BLACK_COLOR: "#272727",
  BACKGROUND_DEFAULT_COLOR: "#F6F6F6",
  BACKGROUND_LOGIN_BUTTON_COLOR: "#1C2D66",
  BACKGROUND_LOGIN_BUTTON_COLOR_OPACITY_50: "#1C2D6650",

  TEXT_PRIMARY_COLOR: "#454545",
  TEXT_PRIMARY_COLOR_OPACITY: "#B9B9B9",
  TEXT_SECONDARY_COLOR: "#FFFFFF",
  TEXT_SECONDARY_COLOR_OPACITY_70: "#FFFFFF70",
  TEXT_SECONDARY_COLOR_OPACITY_50: "#FFFFFF50",
  TEXT_THEME_PRIMARY_COLOR: "#1474A4",
  TEXT_THEME_PRIMARY_COLOR_OPACITY_20: "#1474A420",
  TEXT_THEME_SECONDARY_COLOR: "#154777",
  TEXT_RED_COLOR: "#FF3B30",
  TEXTBOX_PRIMARY_BORDERS_COLOR: "#D6D6D6",
  TEXTBOX_PRIMARY_TEXT_COLOR: "#454545",
  TEXTBOX_PRIMARY_BACKGROUND_COLOR: "#FFFFFF",

  BORDERS_PRIMARY_COLOR: "#D6D6D6",
  BORDERS_SECONDARY_COLOR: "#979797",
  BORDERS_SECONDARY_COLOR_OPACITY_40: "#97979740",
  BADGE_BACKGROUND_COLOR: "#D0021B",

  COLOR_ACTIVE_BLUE: "#0D3459",
  COLOR_ERROR_RED: "#D0021B",
  COLOR_WHITE: "#FFFFFFFF",
  COLOR_BLACK: "#000000",
  COLOR_PRIMARY: "#003478",
  COLOR_SECONDARY: "#FFFFFFFF",
  COLOR_TRANSPARENT: "rgba(0,0,0,0)",
  COLOR_TRANSPARENT_50: "rgba(0,0,0,0.50)",
  COLOR_TRANSPARENT_80: "rgba(0,0,0,0.80)",
  COLOR_SIDEBAR_BACKGROUND: "#B3C8E6",
  COLOR_LinearGradientPrimary: "#0066a1",
  COLOR_LinearGradientSecondaryColor: "#629fd5",

  // Text
  FONT_FAMILY: {
    regular: Platform.OS === "ios" ? "CentraleSansBook" : "CentraleSans-Book",
    medium:
      Platform.OS === "ios" ? "CentraleSansMedium" : "CentraleSans-Medium",
    bold: Platform.OS === "ios" ? "CentraleSansBold" : "CentraleSans-Bold"
  },
  FONT_SIZE: fontSizes,
  getFontSize: function(props) {
    const { h1, h2, h3, h4, h5, h6, h7, h8 } = props;
    if (h1) {
      return fontSizes.h1;
    } else if (h2) {
      return fontSizes.h2;
    } else if (h3) {
      return fontSizes.h3;
    } else if (h4) {
      return fontSizes.h4;
    } else if (h5) {
      return fontSizes.h5;
    } else if (h6) {
      return fontSizes.h6;
    } else if (h7) {
      return fontSizes.h7;
    } else if (h8) {
      return fontSizes.h8;
    }
    return fontSizes.defaultFontSize;
  },
  IOSVersionTopPadding: paddingTop
};
