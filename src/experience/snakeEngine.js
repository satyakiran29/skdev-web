export const BOARD_SIZE = 14;
export const DIRECTIONS = { up: { x: 0, z: -1 }, right: { x: 1, z: 0 }, down: { x: 0, z: 1 }, left: { x: -1, z: 0 } };
const sameCell = (a, b) => a.x === b.x && a.z === b.z;
const opposite = (a, b) => DIRECTIONS[a].x + DIRECTIONS[b].x === 0 && DIRECTIONS[a].z + DIRECTIONS[b].z === 0;

export function placeFood(body, random = Math.random) {
  const empty = [];
  for (let z = 0; z < BOARD_SIZE; z++) for (let x = 0; x < BOARD_SIZE; x++) {
    if (!body.some((cell) => cell.x === x && cell.z === z)) empty.push({ x, z });
  }
  return empty[Math.min(empty.length - 1, Math.floor(random() * empty.length))] || null;
}

export function createSnakeGame() {
  return { body: [{ x: 6, z: 7 }, { x: 5, z: 7 }, { x: 4, z: 7 }, { x: 3, z: 7 }], direction: 'right', turns: [], food: { x: 9, z: 7 }, score: 0, status: 'ready' };
}

export function queueDirection(game, direction) {
  if (!DIRECTIONS[direction] || game.status !== 'running' || game.turns.length >= 2) return game;
  const last = game.turns.at(-1) || game.direction;
  if (direction === last || opposite(last, direction)) return game;
  return { ...game, turns: [...game.turns, direction] };
}

export function stepSnake(game, random = Math.random) {
  if (game.status !== 'running') return game;
  const direction = game.turns[0] || game.direction;
  const vector = DIRECTIONS[direction];
  const head = { x: game.body[0].x + vector.x, z: game.body[0].z + vector.z };
  const eating = game.food && sameCell(head, game.food);
  // The tail leaves its cell on this tick unless food makes the snake grow.
  const occupied = eating ? game.body : game.body.slice(0, -1);
  if (head.x < 0 || head.z < 0 || head.x >= BOARD_SIZE || head.z >= BOARD_SIZE || occupied.some((cell) => sameCell(cell, head))) {
    return { ...game, direction, turns: [], status: 'over' };
  }
  const body = [head, ...game.body];
  if (!eating) body.pop();
  const food = eating ? placeFood(body, random) : game.food;
  return { ...game, body, direction, turns: game.turns.slice(1), food, score: game.score + (eating ? 10 : 0), status: food ? 'running' : 'won' };
}

export const snakeStepTime = (score) => Math.max(110, 260 - score * 1.5);
