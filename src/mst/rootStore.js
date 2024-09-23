import { types, flow } from 'mobx-state-tree';
import { generateAnswers } from '../sources/api';

const { model, array, optional, boolean, string } = types;

export const rootStore = model({
  areAnswersLoading: optional(boolean, false),
  answers: array(string),
}).actions((self) => ({
  fetchAnswers: flow(function* fetchAnswers(clue) {
    self.areAnswersLoading = true;
    const { data } = yield generateAnswers.generateFromClue(clue);

    self.answers = data.answers;
    self.areAnswersLoading = false;
  }),
}));
