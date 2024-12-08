import { LoggerFactory } from './LoggerFactory';

const Logger = LoggerFactory.configure({
  id: 'to-do',
  level: 'all',
});

export { Logger };
