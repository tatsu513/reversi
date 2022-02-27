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

export type ReversibleState = {
  top: boolean;
  topRight: boolean;
  right: boolean;
  bottomRight: boolean;
  bottom: boolean;
  bottomLeft: boolean;
  left: boolean;
  topLeft: boolean;
};
