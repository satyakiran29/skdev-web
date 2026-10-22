import test from 'node:test';
import assert from 'node:assert/strict';
import { BOARD_SIZE, createSnakeGame, placeFood, queueDirection, stepSnake } from './snakeEngine.js';

const running = () => ({ ...createSnakeGame(), status: 'running' });
test('collecting food grows the snake, adds points, and keeps food off its body', () => {
  let game = running();
  for (let index = 0; index < 3; index++) game = stepSnake(game, () => 0.5);
  assert.equal(game.score, 10); assert.equal(game.body.length, 5);
  assert.ok(!game.body.some((cell) => cell.x === game.food.x && cell.z === game.food.z));
});
test('turns queue in order, reject reversals, and cannot stack more than two', () => {
  let game = running();
  assert.equal(queueDirection(game, 'left'), game);
  game = queueDirection(queueDirection(game, 'up'), 'left');
  assert.equal(queueDirection(game, 'down'), game);
  game = stepSnake(game);
  assert.equal(game.direction, 'up'); assert.deepEqual(game.turns, ['left']);
  game = stepSnake(game); assert.equal(game.direction, 'left');
});
test('wall collision ends a round without moving the snake out of bounds', () => {
  const game = { ...running(), body: [{ x: 13, z: 3 }, { x: 12, z: 3 }] };
  const ended = stepSnake(game);
  assert.equal(ended.status, 'over'); assert.deepEqual(ended.body, game.body);
});
test('running into your body ends the round', () => {
  const game = { ...running(), direction: 'down', body: [{ x: 2, z: 2 }, { x: 3, z: 2 }, { x: 3, z: 3 }, { x: 2, z: 3 }, { x: 1, z: 3 }] };
  assert.equal(stepSnake(game).status, 'over');
});
test('moving into the cell vacated by the tail is legal', () => {
  const game = { ...running(), direction: 'down', body: [{ x: 2, z: 2 }, { x: 3, z: 2 }, { x: 3, z: 3 }, { x: 2, z: 3 }] };
  assert.equal(stepSnake(game).status, 'running');
});
test('pause and ready screens never advance or accept turns', () => {
  for (const status of ['ready', 'paused', 'over', 'won']) {
    const game = { ...running(), status };
    assert.equal(stepSnake(game), game); assert.equal(queueDirection(game, 'up'), game);
  }
});
test('the final free cell can be eaten and completes the board', () => {
  const body = [{ x: 0, z: 0 }];
  for (let z = 0; z < BOARD_SIZE; z++) for (let x = 0; x < BOARD_SIZE; x++) if (!(x === 0 && z === 0) && !(x === 1 && z === 0)) body.push({ x, z });
  const game = stepSnake({ ...running(), body, food: { x: 1, z: 0 } });
  assert.equal(game.status, 'won'); assert.equal(game.food, null); assert.equal(game.body.length, BOARD_SIZE ** 2);
  assert.equal(placeFood(game.body), null);
});
