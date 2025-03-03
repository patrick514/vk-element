import type { App } from 'vue';
import Message from './Message.vue';
import { createMessage } from './method';

Message.install = (app: App) => {
  app.component(Message.name!, Message);
};

export default Message;
export { createMessage };

export * from './types';
