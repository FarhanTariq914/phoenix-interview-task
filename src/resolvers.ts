
import { logger } from './logger';
import { UpdateUserInput, User as UserType } from './types';
import User from './database/user';

export const resolvers = {
  Query: {
    getUser: (): UserType => {
      const user = User.getUser();
      logger.info('getUser query called');
      if (!user) {
        logger.error('User object is undefined');
        throw new Error('User object is undefined');
      }
      return user;
    },
  },
  Mutation: {
    updateUser: (_parent: unknown, updateUserInput: UpdateUserInput): UserType => {
      const user = User.getUser();
      logger.info('updateUser mutation called');
      if (!user) {
        logger.error('User object is undefined');
        throw new Error('User object is undefined');
      }
      if (typeof updateUserInput.message !== 'string') {
        logger.error('Invalid message type');
        throw new Error('Invalid message type');
      }
      const isAutomated = updateUserInput.message.startsWith("automated -");
      // Add prefix "manual -" if it's not already automated
      user.message = isAutomated ? updateUserInput.message : `manual - ${updateUserInput.message}`;
      return user;
    },
  },
};
