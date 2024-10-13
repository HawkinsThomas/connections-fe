import { types } from 'mobx-state-tree';
import { v4 } from 'uuid';

const { model, string, optional, boolean, number, identifier } = types;

export const tile = model({
  isSelected: optional(boolean, false),
  text: identifier,
  columnIndex: number,
  rowIndex: number,
  isAnimatingShake: optional(boolean, false),
  isAnimatingShuffle: optional(boolean, false),
  isSolved: optional(boolean, false),
  sortString: optional(string, ''),
}).actions((self) => ({
  shuffle() {
    self.sortString = v4();
  },
  setSolved() {
    self.isSolved = true;
  },
  setSelected(bool) {
    self.isSelected = bool;
  },
  setIsAnimatingShake(bool) {
    self.isAnimatingShake = bool;
  },
  setIsAnimatingShuffle(bool) {
    self.isAnimatingShuffle = bool;
  },
  setGridPosition(columnIndex, rowIndex) {
    self.columnIndex = columnIndex;
    self.rowIndex = rowIndex;
  },
}));
