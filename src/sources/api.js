import { createUrl, SOURCES } from '../utils/createUrl';
import axios from 'axios';

export const generateAnswers = {
  generateFromClue: (clue) => {
    const url = createUrl({
      source: SOURCES.CONNECTIONS_BE,
      route: '/generateAnswers',
      params: { clue },
    });

    return axios.get(url);
  },
};
