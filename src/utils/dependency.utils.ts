
export interface DependencyLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  fromId: string;
  toId: string;
}

export const makeLine = (
  fromPos: { left: number; width: number; top: number },
  toPos: { left: number; width: number; top: number },
  fromId: string,
  toId: string
): DependencyLine => {
  const x1 = fromPos.left + fromPos.width;
  const y1 = fromPos.top + 12;
  const x2 = toPos.left;
  const y2 = toPos.top + 12;
  return { x1, y1, x2, y2, fromId, toId };
};
