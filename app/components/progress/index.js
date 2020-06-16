import React from 'react';
import PropTypes from 'prop-types';
import {View, TextView, ActivityIndicator} from './../../components';
import styles from './styles';
import theme from '../../themes';

const Progress = (props) => {
  if (props.visible) {
    return (
      <View testID={props.testID} style={styles.container}>
        <ActivityIndicator
          color={theme.COLOR_WHITE}
          size="large" // 'small', 'normal', 'large'
        />
        <TextView testID={props.testID + '_title'} style={styles.text}>
          {props.text}
        </TextView>
      </View>
    );
  } else {
    return null;
  }
};

Progress.propTypes = {
  testID: PropTypes.string,
  visible: PropTypes.bool,
  text: PropTypes.string,
};

Progress.defaultProps = {
  testID: 'pContainer',
};

export default Progress;
