import * as React from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../containers/home";
import MatchDetails from "../containers/matchDetails";
import { setConnectivity } from "./../redux/network/actions";
import { NetInfo } from "../components";
const Stack = createStackNavigator();

export class RootStack extends React.Component {
  componentDidMount() {
    NetInfo.fetch().then((netInfoState) => {
      this._onConnectivityChange(netInfoState.isConnected);
    });

    this.netInfoStatusChangeListener = NetInfo.addEventListener(
      (netInfoState) => {
        this._onConnectivityChange(netInfoState.isConnected);
      }
    );
  }

  _onConnectivityChange = (isConnected) => {
    console.log("_onConnectivityChange", isConnected);
    this.props.setConnectivity(isConnected);
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Matches" }}
          />
          <Stack.Screen
            name="MatchDetails"
            component={MatchDetails}
            options={{ title: "MatchDetails" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isOnline: state.network.isOnline,
});

export function bindActions(dispatch) {
  return {
    setConnectivity: (isConnected) => dispatch(setConnectivity(isConnected)),
  };
}

export default connect(mapStateToProps, bindActions)(RootStack);
