import { types } from 'mobx-state-tree';

const { model, optional, boolean, number, identifier } = types;

export const tile = model({
  isSelected: optional(boolean, false),
  text: identifier,
  columnIndex: number,
  rowIndex: number,
  isAnimatingShake: optional(boolean, false),
}).actions((self) => ({
  setSelected(bool) {
    self.isSelected = bool;
  },
  setIsAnimatingShake(bool) {
    self.isAnimatingShake = bool;
  },
  setGridPosition(columnIndex, rowIndex) {
    self.columnIndex = columnIndex;
    self.rowIndex = rowIndex;
  },
}));
