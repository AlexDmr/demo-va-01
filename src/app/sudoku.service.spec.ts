import { TestBed } from '@angular/core/testing';

import { SudokuService, BOARD_RO } from './sudoku.service';

describe('SudokuService avec cas du plateau B1', () => {
  let service: SudokuService;
  const B1: BOARD_RO = [
    [3, 0, 0, 4],
    [4, 0, 0, 1],
    [0, 0, 1, 0],
    [1, 0, 4, 2]
  ];

  beforeEach(() => {
    // Pour l'injection de dépendance
    TestBed.configureTestingModule({});
    service = TestBed.inject(SudokuService);
    service.init(B1);
  });

  it('should be created', () => {
    // Mon service devrait être créé, donc service n'est ni null ni undefined
    expect(service).toBeTruthy();
  });

  it("should return [2] for playable(2, 1)", () => {
    expect( service.playable(2, 1) ).toEqual( [2] );
  });

  it("should return [2, 3, 4] for playable(1, 1)", () => {
    expect( service.playable(1, 1) ).toEqual( [2, 3, 4] );
  });

  it("should return [] for playable(1, 2)", () => {
    expect( service.playable(1, 1) ).toEqual( [] );
  });

  it("should not crash and returns [] when specifying bad indexes (ex -1, 7)", () => {
    expect( service.playable(-1, 7) ).toEqual( [] );
  });
});
