import React, { Component } from "react";

import PropTypes from "prop-types";

import { Base, getSelectedTheme, getFontSize } from "./styles";

import {
  TouchableHighlight,
  TextView,
  ActivityIndicator,
  View
} from "../../components";

class Button extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number
    ]),
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    testID: PropTypes.string,
    textStyle: PropTypes.object,
    showBusy: PropTypes.bool
  };

  static defaultProps = {
    testID: "button",
    showBusy: false,
    onPress: () => {}
  };

  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }

  _onHideUnderlay = () => {
    this.setState({ pressStatus: false });
  };
  _onShowUnderlay = () => {
    this.setState({ pressStatus: true });
  };

  render() {
    const theme = getSelectedTheme(this.props);
    const fontSize = getFontSize(this.props);

    const disableButton =
      (this.props.disabled || this.props.showBusy) === true ? true : false;
    return (
      <TouchableHighlight
        testID={this.props.testID}
        onPress={this.props.onPress}
        disabled={disableButton}
        onHideUnderlay={this._onHideUnderlay}
        onShowUnderlay={this._onShowUnderlay}
        style={[Base.main, this.props.style]}
        underlayColor="none"
      >
        <View
          style={[
            Base.main,
            this.props.style && this.props.style.borderRadius && {borderRadius:this.props.style.borderRadius},
            disableButton
              ? theme.mainDisable
              : this.state.pressStatus ? theme.buttonPress : theme.main
          ]}
        >
          {typeof this.props.children === "string" ? (
            <TextView
              testID={this.props.testID + "_title"}
              style={[
                disableButton ? theme.labelDisable : theme.label,
                fontSize,
                this.props.textStyle
              ]}
            >
              {this.props.children}
            </TextView>
          ) : (
            this.props.children
          )}
          {this.props.showBusy && (
            <ActivityIndicator
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                margin: 16
              }}
              color={theme.COLOR_WHITE}
              size="small" // 'small', 'normal', 'large'
            />
          )}
        </View>
      </TouchableHighlight>
    );
  }
}

export default Button;
