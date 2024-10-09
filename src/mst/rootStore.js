import { types, flow } from 'mobx-state-tree';
import { generateAnswers } from '../sources/api';
import { game } from 'mst/models/game';
import { createSampleGame } from './helpers/createSampleGame';

const { model, array, optional, boolean, string } = types;

export const rootStore = model({
  areAnswersLoading: optional(boolean, false),
  answers: array(string),
  selectedGame: optional(game, createSampleGame()),
}).actions((self) => ({
  fetchAnswers: flow(function* fetchAnswers(clue) {
    self.areAnswersLoading = true;
    const { data } = yield generateAnswers.generateFromClue(clue);

    self.answers = data.answers;
    self.areAnswersLoading = false;
  }),
}));
