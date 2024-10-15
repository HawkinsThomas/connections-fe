import { types } from 'mobx-state-tree';
import { v4 } from 'uuid';

const { model, string, optional, boolean, number, identifier } = types;

export const tile = model({
  isSelected: optional(boolean, false),
  text: identifier,
  columnIndex: number,
  rowIndex: number,
  isAnimatingShake: optional(boolean, false),
  isAnimatingSwap: optional(boolean, false),
  isAnimatingShuffle: optional(boolean, false),
  isSolved: optional(boolean, false),
  sortString: optional(string, ''),
  xOffset: optional(number, 0),
  yOffset: optional(number, 0),
}).actions((self) => ({
  shuffle() {
    self.sortString = v4();
  },
  setSortString(sortString) {
    self.sortString = sortString;
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
  setIsAnimatingSwap(bool) {
    self.isAnimatingSwap = bool;
  },
  animateSwap(swapTile) {
    self.isAnimatingSwap = true;
    self.xOffset = swapTile.columnIndex - self.columnIndex;
    self.yOffset = swapTile.rowIndex - self.rowIndex;
  },
  setIsAnimatingShuffle(bool) {
    self.isAnimatingShuffle = bool;
  },
  setGridPosition(columnIndex, rowIndex) {
    self.columnIndex = columnIndex;
    self.rowIndex = rowIndex;
  },
  setRowIndex(index) {
    self.rowIndex = index;
  },
  setColumnIndex(index) {
    self.columnIndex = index;
  },
}));
