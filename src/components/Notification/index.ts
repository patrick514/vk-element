import type { App } from 'vue';
import Notification from './Notification.vue';
import { createNotification } from './method';

Notification.install = (app: App) => {
  app.component(Notification.name!, Notification);
};

export default Notification;
export { createNotification };

export * from './types';
