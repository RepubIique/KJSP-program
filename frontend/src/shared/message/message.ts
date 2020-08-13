import { i18n } from '@/i18n';
import { Notification } from 'element-ui';

export default class Message {
  static success(payload) {
    Notification({
      title: '',
      showClose: true,
      message: payload,
      type: 'success',
      duration: 6000,
      position: 'bottom-left',
    });
  }

  static error(payload) {
    let message = payload;

    if (!message) {
      message = i18n('errors.defaultErrorMessage');
    }

    Notification({
      title: '',
      showClose: true,
      message,
      type: 'error',
      duration: 6000,
      position: 'bottom-left',
    });
  }
}
