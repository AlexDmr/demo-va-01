import { Injectable } from '@angular/core';

// Définitions
export type VALUE = 0 | 1 | 2 | 3 | 4; // 0 means empty
export type BOARD = [
  [VALUE, VALUE, VALUE, VALUE],
  [VALUE, VALUE, VALUE, VALUE],
  [VALUE, VALUE, VALUE, VALUE],
  [VALUE, VALUE, VALUE, VALUE]
];

export type BOARD_RO = readonly [
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
   * On initialise le plateau avec b.
   * Attention : b n'est pas copié mais référencé
   * @param b le plateau utilisé pour initialiser
   */
  init(b: BOARD_RO): void {
    this._board = b.map( L => [...L] ) as BOARD;
  }

  /**
   * Values that are playables at i, j
   * @param i Index of the line
   * @param j Index of the column
   * @returns [] if i, j is not a valid position or if the position already contains a VALUE !== 0
   * @returns the list of possible values otherwise
   */
  playable(i: number, j: number): VALUE[] {
    if (this.board[i]?.[j] !== 0) {
      return [];
    } else {
      const L: VALUE[] = [];
      [1, 2, 3, 4].forEach( v => {
        // Est ce que v est déjà présente sur la ligne i ?

        // Est ce que v est déjà présente sur la colonne j ?

        // Est ce que v est déjà présente sur le sous carré contenant i, j ?
      });
      return L;
    }
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
