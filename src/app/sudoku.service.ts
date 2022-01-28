import { Injectable } from '@angular/core';

// Définitions
type VALUE = 0 | 1 | 2 | 3 | 4; // 0 means empty
type BOARD = [
  [VALUE, VALUE, VALUE, VALUE],
  [VALUE, VALUE, VALUE, VALUE],
  [VALUE, VALUE, VALUE, VALUE],
  [VALUE, VALUE, VALUE, VALUE]
];

type BOARD_RO = readonly [
  readonly [VALUE, VALUE, VALUE, VALUE],
  readonly [VALUE, VALUE, VALUE, VALUE],
  readonly [VALUE, VALUE, VALUE, VALUE],
  readonly [VALUE, VALUE, VALUE, VALUE]
];

export function genEmptyBoard(): BOARD {
  return [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}

@Injectable({
  providedIn: 'root'
})
export class SudokuService {
  private _board: BOARD = genEmptyBoard();

  constructor() { }

  get board(): BOARD_RO {
    return this._board;
  }

  /**
   * Values that are playables at i, j
   * @param i Index of the line
   * @param j Index of the column
   * @returns [] if i, j is not a valid position or if the position already contains a VALUE !== 0
   * @returns the list of possible values otherwise
   */
  playable(i: number, j: number): Set<VALUE> {
    return new Set([]);
  }

  /**
   * Play VALUE v at i, j. If the play is valid, the internal board is updated.
   * @param i Index of the line
   * @param j Index of the column
   * @param v VALUE to write
   * @returns undefined if it is NOT possible to play v at i, j. (bad value or bad indexes)
   * @returns the new board otherweise
   */
  play(i: number, j: number, v: VALUE): BOARD_RO | undefined {
    return undefined;
  }

  /**
   * The state of the game, can be:
   * @returns 'WIP' if the game is not finished and it is possible to play somewhere
   * @returns 'WIN' if the game is finished, there is no more position at 0.
   * @returns 'GAME OVER' if the game is not finished but there is no playable position.
   */
  get state(): 'WIP' | 'WIN' | 'GAME OVER' {
    return 'WIP';
  }
}
