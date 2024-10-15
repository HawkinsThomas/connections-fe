import { getSnapshot } from 'mobx-state-tree';
import { game } from 'mst/models/game';
import { group } from 'mst/models/group';
import { tile } from 'mst/models/tile';

// group 1
const cactus = tile.create({ text: 'cactus', columnIndex: 0, rowIndex: 0 });
const hedgehog = tile.create({ text: 'hedgehog', columnIndex: 1, rowIndex: 0 });
const tack = tile.create({ text: 'tack', columnIndex: 2, rowIndex: 0 });
const pufferfish = tile.create({ text: 'pufferfish', columnIndex: 3, rowIndex: 0 });

const groupOneTiles = [cactus, hedgehog, tack, pufferfish];

// group 2
const purr = tile.create({ text: 'purr', columnIndex: 0, rowIndex: 1 });
const shed = tile.create({ text: 'shed', columnIndex: 1, rowIndex: 1 });
const beg = tile.create({ text: 'beg', columnIndex: 2, rowIndex: 1 });
const meow = tile.create({ text: 'meow', columnIndex: 3, rowIndex: 1 });

const groupTwoTiles = [purr, shed, beg, meow];

// group 3
const burdock = tile.create({ text: 'burdock', columnIndex: 0, rowIndex: 2 });
const bellwoods = tile.create({ text: 'bellwoods', columnIndex: 1, rowIndex: 2 });
const bandit = tile.create({ text: 'bandit', columnIndex: 2, rowIndex: 2 });
const millSt = tile.create({ text: 'mill st', columnIndex: 3, rowIndex: 2 });

const groupThreeTiles = [burdock, bellwoods, bandit, millSt];

// group 4
const cheese = tile.create({ text: 'cheese', columnIndex: 0, rowIndex: 3 });
const bed = tile.create({ text: 'bed', columnIndex: 1, rowIndex: 3 });
const strawberry = tile.create({ text: 'strawberry', columnIndex: 2, rowIndex: 3 });
const wheel = tile.create({ text: 'wheel', columnIndex: 3, rowIndex: 3 });

const groupFourTiles = [cheese, bed, strawberry, wheel];

export function createSampleGame() {
  const groupOne = group
    .create({
      clue: 'Spikey Things',
    })
    .setTiles(groupOneTiles);

  const groupTwo = group
    .create({
      clue: 'Things a cat does',
    })
    .setTiles(groupTwoTiles);

  const groupThree = group
    .create({
      clue: 'Toronto Breweries',
    })
    .setTiles(groupThreeTiles);

  const groupFour = group
    .create({
      clue: 'Things a hamster likes',
    })
    .setTiles(groupFourTiles);

  const sampleGame = game.create({});
  sampleGame.addTiles([...groupOneTiles, ...groupTwoTiles, ...groupThreeTiles, ...groupFourTiles]);
  sampleGame.addGroup(groupOne).addGroup(groupTwo).addGroup(groupThree).addGroup(groupFour);
  sampleGame.shuffleTiles();
  sampleGame.setIsShuffling(false);

  return getSnapshot(sampleGame);
}
