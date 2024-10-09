import { types } from 'mobx-state-tree';
import { tile } from './tile';
const { model, map, optional, boolean, identifier, reference } = types;

export const group = model({
  clue: identifier,
  tiles: map(reference(tile)),
  isSolved: optional(boolean, false),
}).actions((self) => ({
  setSolved() {
    self.isSolved = true;
  },
  setTiles(tileRefs) {
    tileRefs.forEach((tileRef) => {
      self.tiles.put(tileRef);
    });
    return self;
  },
}));
