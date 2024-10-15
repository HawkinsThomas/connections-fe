import { types } from 'mobx-state-tree';
import { tile } from './tile';
import { values } from 'mobx';
import { getRoot } from 'mobx-state-tree';

const { model, map, optional, boolean, identifier, reference } = types;

export const group = model({
  clue: identifier,
  tiles: map(reference(tile)),
  isSolved: optional(boolean, false),
})
  .actions((self) => ({
    setSolved() {
      self.isSolved = true;
      values(self.tiles).forEach((tile) => tile.setSolved());
    },
    setTiles(tileRefs) {
      tileRefs.forEach((tileRef) => {
        self.tiles.put(tileRef);
      });
      return self;
    },
  }))
  .views((self) => ({
    get isGroupSelected() {
      const {
        selectedGame: { selectedTiles },
      } = getRoot(self);
      if (!values(selectedTiles).length) return false;
      return values(selectedTiles).every((tile) => values(self.tiles).includes(tile));
    },
  }));
