import config from 'config';
import axios from 'axios';
import User from '../database/user';
import { logger } from '../logger';

const fetchAndUpdateUser = async (): Promise<void> => {
  const url = config.ENV.apiUrl;
  try {
    const response = await axios.get(url);
    const { id, uid, first_name, last_name, username, email } = response.data;

    const user = { id, uid, first_name: first_name, last_name: last_name, username, email, message: '' };
    User.setUser(user);

    logger.info('User object updated successfully');
  } catch (err) {
    logger.error(`Error updating user object: ${err}`);
    throw new Error('Error fetching user data');
  }
};

export { fetchAndUpdateUser };