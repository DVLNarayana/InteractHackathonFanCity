import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {
  TextBox,
  TouchableOpacity,
  View,
  Image,
  TextView,
} from "../../components";
import styles from "./styles";

export default class TextBoxInputWithIcon extends PureComponent {
  static propTypes = {
    textBoxTextAlignmentStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number,
    ]),
  };

  static defaultProps = {
    textBoxTextAlignmentStyle: {justifyContent: "center"},
  };

  constructor(props) {
    super(props);
    this.state = {
      onFocusContainerStyle: {},
      onFocusContentStyle: {},
    };
  }

  focus() {
    this.input.focus();
  }

  render() {
    return (
      <View style={this.props.style}>
        {this.props.textBoxTitle && (
          <TextView
            bold
            testID={`${this.props.testID}_title`}
            h7
            style={[styles.textBoxTitle, this.props.textBoxTitleStyle]}>
            {this.props.textBoxTitle}
          </TextView>
        )}
        <View
          style={[
            styles.container,
            this.props.textBoxStyle,
            this.input && this.state.onFocusContainerStyle,
          ]}>
          <View
            style={[
              styles.content,
              this.input && this.state.onFocusContentStyle,
            ]}>
            {this.props.rightIconImageSource && (
              <TouchableOpacity
                testID={`${this.props.testID}_LeftButton`}
                accessible={false}
                style={styles.icon}
                onPress={() => {
                  this.input.focus();
                }}>
                <Image
                  testID={`${this.props.testID}_LeftIcon`}
                  source={this.props.rightIconImageSource}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            <TextBox
              ref={c => {
                this.input = c;
              }}
              testID={this.props.testID}
              style={[
                styles.textBox,
                this.props.textBoxTextAlignmentStyle,
                !this.props.rightIconImageSource && {paddingLeft: 12},
              ]}
              keyboardType={
                this.props.keyboardType ? this.props.keyboardType : "default"
              }
              autoFocus={this.props.autoFocus}
              value={this.props.value}
              multiline={this.props.multiline}
              onSubmitEditing={this.props.onSubmitEditing}
              placeholder={this.props.placeholder}
              returnKeyType={this.props.returnKeyType}
              onChangeText={this.props.onChangeText}
              secureTextEntry={this.props.secureTextEntry}
              contextMenuHidden={this.props.contextMenuHidden}
              onFocus={() => {
                this.setState({
                  onFocusContainerStyle: styles.onFocusContainerStyle,
                  onFocusContentStyle: styles.onFocusContentStyle,
                });
                if (this.props.onFocus) {
                  this.props.onFocus();
                }
              }}
              onBlur={() => {
                this.setState({
                  onFocusContainerStyle: {},
                  onFocusContentStyle: {},
                });
                if (this.props.onBlur) {
                  this.props.onBlur();
                }
              }}
            />
            {this.props.leftIconImageSource && (
              <TouchableOpacity
                testID={`${this.props.testID}_RightButton`}
                accessible={false}
                style={styles.icon}
                onPress={this.props.onClickLeftIcon}>
                <Image
                  testID={`${this.props.testID}_RightIcon`}
                  source={this.props.leftIconImageSource}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}
