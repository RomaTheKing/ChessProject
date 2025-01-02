export const getColor = (unitName) => {
  if (unitName === undefined) return "-";
  return unitName.substring(unitName.length - 1);
};

const isEnemy = ({ x, y, color, tiles }) => {
  if (x < 1 || x > 8 || y < 1 || y > 8) return false;
  const id = y * 8 + x - 9;
  return tiles[id] !== undefined && getColor(tiles[id]) === color;
};
const isFree = ({ x, y, tiles }) => {
  if (x < 1 || x > 8 || y < 1 || y > 8) return false;
  const id = y * 8 + x - 9;
  console.log(1, tiles[id], 1);
  return tiles[id] === "";
};

export const clearMoves = (selectedTiles) => {
  for (let y = 1; y < 9; y++) {
    for (let x = 1; x < 9; x++) {
      selectedTiles[y * 8 + x - 9] = false;
    }
  }
};

export const setMoves = ({ unitName, x, y, tiles, selectedTiles }) => {
  let color = getColor(unitName);
  clearMoves(selectedTiles);

  if (unitName.startsWith("king"))
    moveKing({ x, y, color, tiles, selectedTiles });
  if (unitName.startsWith("queen"))
    moveQueen({ x, y, color, tiles, selectedTiles });
  if (unitName.startsWith("rook"))
    moveRook({ x, y, color, tiles, selectedTiles });
  if (unitName.startsWith("bishop"))
    moveBishop({ x, y, color, tiles, selectedTiles });
  if (unitName.startsWith("pawn"))
    movePawn({ x, y, color, tiles, selectedTiles });
  if (unitName.startsWith("knight"))
    moveKnight({ x, y, color, tiles, selectedTiles });
};

const KNIGHT_DX = [1, 1, -1, -1, 2, 2, -2, -2];
const KNIGHT_DY = [2, -2, 2, -2, 1, -1, 1, -1];

const moveKnight = ({ x, y, color, tiles, selectedTiles }) => {
  for (let i = 0; i < KNIGHT_DX.length; i++) {
    const xx = x + KNIGHT_DX[i];
    const yy = y + KNIGHT_DY[i];
    const id = yy * 8 + xx - 9;
    if (xx < 1 || xx > 8 || yy < 1 || yy > 8) continue;
    if (tiles[id] === undefined || getColor(tiles[id]) !== color)
      selectedTiles[id] = true;
  }
};

const movePawn = ({ x, y, color, tiles, selectedTiles }) => {
  if (color == "w") {
    if (isEnemy({ x: x - 1, y: y + 1, color, tiles }))
      selectedTiles[(y + 1) * 8 + x - 1 - 9] = true;
    if (isEnemy({ x: x + 1, y: y + 1, color, tiles }))
      selectedTiles[(y + 1) * 8 + x + 1 - 9] = true;
    unitMove({ x, y, dx: 0, dy: 1, maxDist: 2, color, tiles, selectedTiles });
  } else {
    if (isEnemy({ x: x - 1, y: y - 1, color, tiles }))
      selectedTiles[(y - 1) * 8 + x - 1 - 9] = true;
    if (isEnemy({ x: x + 1, y: y - 1, color, tiles }))
      selectedTiles[(y - 1) * 8 + x + 1 - 9] = true;
    unitMove({ x, y, dx: 0, dy: -1, maxDist: 2, color, tiles, selectedTiles });
  }
};

const moveKing = ({ x, y, color, tiles, selectedTiles }) => {
  moveRook({ x, y, maxDist: 1, color, tiles, selectedTiles });
  moveBishop({ x, y, maxDist: 1, color, tiles, selectedTiles });
};

const moveQueen = ({ x, y, color, tiles, selectedTiles }) => {
  moveRook({ x, y, color, tiles, selectedTiles });
  moveBishop({ x, y, color, tiles, selectedTiles });
};

const moveRook = ({ x, y, color, tiles, selectedTiles, maxDist = 8 }) => {
  unitMove({ x, y, dx: 0, dy: 1, maxDist, color, tiles, selectedTiles });
  unitMove({ x, y, dx: 0, dy: -1, maxDist, color, tiles, selectedTiles });
  unitMove({ x, y, dx: 1, dy: 0, maxDist, color, tiles, selectedTiles });
  unitMove({ x, y, dx: -1, dy: 0, maxDist, color, tiles, selectedTiles });
};

const moveBishop = ({ x, y, color, tiles, selectedTiles, maxDist = 8 }) => {
  unitMove({ x, y, dx: 1, dy: 1, maxDist, color, tiles, selectedTiles });
  unitMove({ x, y, dx: 1, dy: -1, maxDist, color, tiles, selectedTiles });
  unitMove({ x, y, dx: -1, dy: 1, maxDist, color, tiles, selectedTiles });
  unitMove({ x, y, dx: -1, dy: -1, maxDist, color, tiles, selectedTiles });
};

const unitMove = ({ x, y, dx, dy, color, maxDist, tiles, selectedTiles }) => {
  while (maxDist-- > 0) {
    x += dx;
    y += dy;
    if (x < 1 || x > 8 || y < 1 || y > 8) break;
    const id = y * 8 + x - 9;
    if (tiles[id] === "" || getColor(tiles[id]) !== color)
      selectedTiles[id] = true;
    if (tiles[id] !== "") break;
  }
};
