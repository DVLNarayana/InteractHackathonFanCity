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
    fontSize: 16
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
  BACKGROUND_PRIMARY_COLOR: "#FFFFFF",
  BACKGROUND_SECONDARY_COLOR: "#F5F5F5",
  BACKGROUND_BUTTON_PRIMARY: "#00E487",
  BACKGROUND_BUTTON_PRIMARY_PRESSED: "#00B66C",
  BACKGROUND_BUTTON_PRIMARY_OPACITY_40: "#00E48740",
  BACKGROUND_BUTTON_SECONDARY: "#FFFFFF",

  BACKGROUND_WHITE_COLOR: "#FFFFFF",
  BACKGROUND_WHITE_COLOR_OPACITY_80: "rgba(255,255,255,0.8)",
  BACKGROUND_WHITE_COLOR_OPACITY_90: "rgba(255,255,255,0.9)",
  BACKGROUND_BLACK_COLOR: "#272727",
  BACKGROUND_DEFAULT_COLOR: "#F6F6F6",
  BACKGROUND_LOGIN_BUTTON_COLOR: "#1C2D66",
  BACKGROUND_LOGIN_BUTTON_COLOR_OPACITY_50: "#1C2D6650",

  TEXT_PRIMARY_COLOR: "#3C3C41",
  TEXT_PRIMARY_COLOR_OPACITY_40: "#3C3C4140",
  TEXT_SECONDARY_COLOR: "#8A8A8D",
  ACTION_TEXT_COLOR_BLUE: "#1432FF",
  ACTION_TEXT_COLOR_BLUE_1: "#0D32FF",
  ACTION_TEXT_COLOR_DISABLE: "#D0D6FF",
  ACTION_TEXT_COLOR_RED: "#FF0019",
  TEXT_PLACEHOLDER_COLOR: "#B1B1B3",
  TEXT_SECONDARY_COLOR_OPACITY_70: "#FFFFFF70",
  TEXT_SECONDARY_COLOR_OPACITY_50: "#FFFFFF50",
  TEXT_THEME_PRIMARY_COLOR: "#1474A4",
  TEXT_THEME_PRIMARY_COLOR_OPACITY_20: "#1474A420",
  TEXT_THEME_SECONDARY_COLOR: "#154777",
  TEXT_RED_COLOR: "#FF3B30",
  TEXTBOX_PRIMARY_BORDERS_COLOR: "#D6D6D6",
  TEXTBOX_PRIMARY_TEXT_COLOR: "#454545",
  TEXTBOX_PRIMARY_BACKGROUND_COLOR: "#FFFFFF",
  TEXTBOX_BORDER_ON_FOCUS_COLOR: "#1432FF",

  BORDERS_HEADER_COLOR: "rgba(0,0,0,0.16)",
  BORDERS_PRIMARY_COLOR: "#D8D8D9",
  BORDERS_SECONDARY_COLOR: "#EBEBEC",
  BORDERS_SECONDARY_COLOR_OPACITY_40: "#97979740",
  BADGE_BACKGROUND_COLOR: "#FF6D00",

  COLOR_ACTIVE_BLUE: "#0D3459",
  COLOR_ERROR_RED: "#D0021B",
  COLOR_WHITE: "#FFFFFFFF",
  COLOR_BLACK: "#000000",
  COLOR_PRIMARY: "#003478",
  COLOR_SECONDARY: "#FFFFFFFF",
  COLOR_TRANSPARENT: "rgba(0,0,0,0)",
  COLOR_TRANSPARENT_50: "rgba(0,0,0,0.50)",
  COLOR_TRANSPARENT_80: "rgba(0,0,0,0.80)",
  COLOR_TRANSPARENT_SCAN: "rgba(5,5,6,0.4)",
  COLOR_SIDEBAR_BACKGROUND: "#B3C8E6",
  COLOR_LinearGradientPrimary: "#0066a1",
  COLOR_LinearGradientSecondaryColor: "#629fd5",

  GRAPH_BAR_COLOR: "#FFC107",

  // Text
  FONT_FAMILY: {
    header: "SignifyRaisonne-DemiBold",
    book: "Relative-Book",
    bold: "Relative-Bold"
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
