import { types } from 'mobx-state-tree';
import { tile } from 'mst/models/tile';
import { group } from 'mst/models/group';
import { values } from 'mobx';

const { model, map, array, optional, reference, number, boolean } = types;

export const game = model({
  mistakesRemaining: optional(number, 4),
  tiles: array(tile),
  groups: map(group),
  selectedTiles: map(reference(tile)),
  isShuffling: optional(boolean, false),
})
  .actions((self) => ({
    shuffleTiles() {
      // sorry to anyone reading this
      if (!self.isShuffling) {
        self.isShuffling = true;
        self.tiles.forEach((tile, index) => {
          setTimeout(() => {
            tile.setIsAnimatingShuffle(true);
            if (index === 15) {
              setTimeout(() => self.setIsShuffling(false), 2000);
              setTimeout(() => self.sortShuffledTiles(false), 500);
            }
            setTimeout(() => tile.shuffle(), 500);
          }, index * 20);
        });
      }
    },
    swapTiles() {
      const selectedTilesToSwap = self.tiles.filter((tile) => tile.isSelected && !!tile.rowIndex);
      const nonSelectedTilesToSwap = self.tiles.filter((tile) => !tile.isSelected && tile.rowIndex === 0);

      selectedTilesToSwap.forEach((selectedTile, index) => {
        const nonSelectedTile = nonSelectedTilesToSwap[index];

        selectedTile.animateSwap(nonSelectedTile);
        nonSelectedTile.animateSwap(selectedTile);
      });
    },
    setIsShuffling(bool) {
      self.isShuffling = bool;
    },
    useMistake() {
      self.mistakesRemaining -= 1;
    },
    sortShuffledTiles() {
      self.tiles = self.tiles.sort((a, b) => (a.sortString > b.sortString ? 1 : -1));
      self.tiles.forEach((tile, index) => {
        tile.setColumnIndex(index % 4);
        tile.setRowIndex(Math.floor(index / 4));
      });
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
      } else if (values(self.selectedTiles).length < 4 && !tileRef.isSolved) {
        tileRef.setSelected(true);
        self.selectedTiles.put(tileRef);
      }
    },
    addGroup(groupRef) {
      self.groups.put(groupRef);
      return self;
    },
    clearSelections() {
      values(self.selectedTiles).forEach((tile) => tile.setSelected(false));
      self.selectedTiles = {};
    },
    submitGroupHandler() {
      let isSelectionCorrect = false;
      values(self.groups).forEach((group) => {
        if (group.isGroupSelected) {
          group.setSolved();
          isSelectionCorrect = true;
          self.clearSelections();
        }
      });
      if (!isSelectionCorrect) {
        self.useMistake();
        values(self.selectedTiles).forEach((tile) => {
          tile.setIsAnimatingShake(true);
        });
      }
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
    // get sortedTiles() {
    //   return values(self.tiles).sort((a, b) => (a.sortString > b.sortString ? 1 : -1));
    // },
  }));
