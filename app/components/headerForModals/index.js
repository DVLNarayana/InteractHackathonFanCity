import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {View, Button, TextView, SafeAreaView} from '../../components';

const HeaderForModalScreen = (props) => {
  return (
    <View
      testID={props.testID + '_view'}
      style={[styles.container, props.style]}>
      <SafeAreaView style={styles.content}>
        <Button
          testID={props.testID + '_leftBtn'}
          disabled={props.disableLeftButton}
          extras={{ellipsizeMode: 'tail', numberOfLines: 1}}
          style={
            props.showLeftButton
              ? styles.showLeftIconButton
              : styles.hideIconButton
          }
          onPress={props.onLeftButtonClick}>
          {props.leftButtonText}
        </Button>
        <TextView
          testID={props.testID + '_title'}
          header
          h4
          extras={{ellipsizeMode: 'tail', numberOfLines: 1}}
          style={[
            props.showLeftButton
              ? props.showRightButton
                ? styles.title
                : styles.makeTitleCenter
              : styles.title,
          ]}>
          {props.title}
        </TextView>
        <Button
          testID={props.testID + '_rightBtn'}
          disabled={props.disableRightButton}
          style={
            props.showRightButton
              ? styles.showRightIconButton
              : styles.hideIconButton
          }
          onPress={props.onRightButtonClick}>
          <TextView
            bold
            extras={{ellipsizeMode: 'tail', numberOfLines: 1}}
            style={[
              styles.buttonTextStyle,
              props.disableRightButton ? {opacity: 0.5} : {},
            ]}>
            {props.rightButtonText}
          </TextView>
        </Button>
      </SafeAreaView>
    </View>
  );
};

HeaderForModalScreen.propTypes = {
  testID: PropTypes.string,
  title: PropTypes.string,
  showLeftButton: PropTypes.bool,
  showRightButton: PropTypes.bool,
  leftButtonText: PropTypes.string,
  onLeftButtonClick: PropTypes.func,
  rightButtonText: PropTypes.string,
  onRightButtonClick: PropTypes.func,
  disableRightButton: PropTypes.bool,
  disableLeftButton: PropTypes.bool,
};

HeaderForModalScreen.defaultProps = {
  testID: 'mHeader',
  title: '',
  showLeftButton: true,
  showRightButton: true,
  disableRightButton: false,
  disableLeftButton: false,
};

export default HeaderForModalScreen;
