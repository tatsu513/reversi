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

export enum Direction {
  TOP = 'top',
  TOP_RIGHT = 'topRight',
  RIGHT = 'right',
  BOTTOM_RIGHT = 'bottomRight',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottomLeft',
  LEFT = 'left',
  TOP_LEFT = 'topLeft',
}

type CellPosition = {
  x: number;
  y: number;
};

export type CellState = {
  enable: boolean;
  cells: CellPosition[];
};

export type ReversibleInfo = { [key in Direction]: CellState };
export type PredictState = { [key in Direction]: boolean };

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
