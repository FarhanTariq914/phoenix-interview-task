import { resolvers } from '../resolvers';
import { logger } from '../logger';

const startScheduledUpdates = () => {
  setInterval(() => {
    const scheduledMessage = `automated - ${new Date().toISOString()}`;
    try {
        resolvers.Mutation.updateUser("",{message: scheduledMessage})
        logger.info('User object updated successfully');
    } catch (error) {
        
        logger.error(`Error updating user object: ${error}`);
    }

  }, 60000);
};

export { startScheduledUpdates };
