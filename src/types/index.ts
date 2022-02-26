export enum State {
  WHITE = 'white',
  BLACK = 'black',
  NONE = 'none',
}
export type CellType = {
  x: number;
  y: number;
  state: State;
};

export type AllCellsData = CellType[][];
