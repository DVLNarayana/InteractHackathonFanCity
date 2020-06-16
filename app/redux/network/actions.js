/* @flow */

export const NETWORK_CHANGE = 'network/change';

// export function setConnectivity(network) {
//   // network : { type: 'wifi', effectiveType: 'unknown' }
//   const status = network && network.type.toUpperCase();
//   return {
//     type: NETWORK_CHANGE,
//     payload: {
//       isOnline: status !== "NONE"
//     }
//   };
// }

export function setConnectivity(isConnected: boolean) {
  return {
    type: NETWORK_CHANGE,
    payload: {
      isOnline: isConnected,
    },
  };
}
