import { types } from 'mobx-state-tree';
import { tile } from 'mst/models/tile';
import { group } from 'mst/models/group';
import { values } from 'mobx';

const { model, map, array, optional, reference, number } = types;

export const game = model({
  mistakesRemaining: optional(number, 4),
  tiles: array(tile),
  groups: map(group),
  selectedTiles: map(reference(tile)),
})
  .actions((self) => ({
    useMistake() {
      self.mistakesRemaining -= 1;
    },
    addTiles(tileRefs) {
      tileRefs.forEach((tileRef) => {
        self.tiles.push(tileRef);
      });
      return self;
    },
    tileOnClickHandler(tileRef) {
      if (tileRef.isSelected) {
        tileRef.setSelected(false);
        self.selectedTiles.delete(tileRef.text);
      } else if (values(self.selectedTiles).length < 4) {
        tileRef.setSelected(true);
        self.selectedTiles.put(tileRef);
      }
    },
    addGroup(groupRef) {
      self.groups.put(groupRef);
      return self;
    },
    clearSelections() {
      self.selectedTiles = [];
    },
    submitGroupHandler() {
      values(self.selectedTiles).forEach((tile) => {
        tile.setIsAnimatingShake(true);
      });
    },
  }))
  .views((self) => ({
    getGroupByIndex(rowIndex) {
      return values(self.groups)[rowIndex];
    },
    getTileByIndex(rowIndex, columnIndex) {
      return self.tiles[rowIndex * 4 + columnIndex];
    },
    get isSubmitEnabled() {
      return values(self.selectedTiles).length === 4;
    },
  }));
