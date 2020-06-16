'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, HeaderButton} from '../../components';
import styles from './styles';
import {showAlertMessage, canShowPageBusy} from '../../redux/app/actions';

export class Home extends Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    return {
      headerRight: (
        <HeaderButton
          testID="btnNewGroup"
          onPress={params && params.onClickNewGroup}
          text="Add"
        />
      ),
    };
  };

  render() {
    return <View testID="HomeScreen" style={styles.container}></View>;
  }
}

const mapStateToProps = (state) => ({
  isOnline: state.network.isOnline,
});

export const bindActions = (dispatch) => {
  return {
    showAlertMessage: (header, message, onPress) =>
      dispatch(showAlertMessage(header, message, onPress)),
    canShowPageBusy: (status) => dispatch(canShowPageBusy(status)),
  };
};

export default connect(mapStateToProps, bindActions)(Home);
