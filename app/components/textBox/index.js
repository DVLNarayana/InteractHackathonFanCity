import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native";
import { styles, getSelectedThem, getFontSize } from "./styles";
import theme from "../../themes";

class TextBox extends Component {
  static propTypes = {
    testID: PropTypes.string,
    value: PropTypes.string,
    autoFocus: PropTypes.bool,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    secureTextEntry: PropTypes.bool,
    placeholder: PropTypes.string,
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number
    ]),
    onChangeText: PropTypes.func,
    onFocus: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      theme: getSelectedThem(this.props),
      fontSize: getFontSize(this.props)
    };
  }

  focus() {
    this.input.focus();
  }

  isFocused() {
    return this.input.isFocused();
  }

  render() {
    return (
      <TextInput
        ref={c => {
          this.input = c;
        }}
        testID={this.props.testID}
        accessible
        value={this.props.value}
        autoFocus={this.props.autoFocus ? true : false}
        multiline={this.props.multiline}
        numberOfLines={this.props.numberOfLines ? this.props.numberOfLines : 1}
        underlineColorAndroid="transparent"
        secureTextEntry={this.props.secureTextEntry}
        placeholder={this.props.placeholder}
        placeholderTextColor={theme.TEXT_PLACEHOLDER_COLOR}
        style={[
          styles.base,
          this.state.fontSize,
          this.state.theme,
          this.props.style
        ]}
        onChangeText={this.props.onChangeText}
        onFocus={this.props.onFocus}
        autoCorrect={false}
        keyboardType={
          this.props.keyboardType ? this.props.keyboardType : "default"
        }
        returnKeyType={this.props.returnKeyType}
        onSubmitEditing={this.props.onSubmitEditing}
        enablesReturnKeyAutomatically={
          this.props.enablesReturnKeyAutomatically || false
        }
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        selectionColor={theme.TEXTBOX_BORDER_ON_FOCUS_COLOR}
      />
    );
  }
}

export default TextBox;
