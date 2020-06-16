export const APP_SHOW_ALERT = 'APP_SHOW_ALERT';
export const APP_RESET_ALERT = 'APP_RESET_ALERT';
export const APP_CAN_SHOW_PAGE_BUSY = 'APP_CAN_SHOW_PAGE_BUSY';

export function canShowPageBusy(status) {
  return {
    type: APP_CAN_SHOW_PAGE_BUSY,
    status,
  };
}

export function showAlertMessage(header, message, onPress) {
  return {
    type: APP_SHOW_ALERT,
    alertMessage: {
      header,
      message,
      onPress,
    },
  };
}

export function resetAlertMessage() {
  return {
    type: APP_RESET_ALERT,
  };
}
