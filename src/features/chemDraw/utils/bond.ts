import { v4 as uuid } from "uuid";
export type Point = {
  x: number;
  y: number;
};
const LineOffset = 4;
const BondLength = 100;
export enum BondType {
  Single = 1,
  Double,
  Triple,
}
export type BondPosition = {
  from: Point;
  to: Point;
};

export const updateBond = (
  start: Point,
  end: Point,
  bondType: BondType = BondType.Single
) => {
  const { x: startX, y: startY } = start;
  const { x: endX, y: endY } = end;
  const dx = endX - startX;
  const dy = endY - startY;
  const slope = dy / dx;

  const perpendicularSlope = -1 / slope;
  const offsetVal =
    LineOffset * Math.sqrt(1 / (1 + Math.pow(perpendicularSlope, 2)));
  // const {from:newStart, to:newEnd} = fixedLengthLine(start, end, BondLength);
  let bonds: BondPosition[] = [];

  if (bondType === BondType.Single || bondType === BondType.Triple) {
    bonds = [
      ...bonds,
      {
        from: start,
        to: end,
      },
    ];
  }

  if (bondType === BondType.Double || bondType === BondType.Triple) {
    const bond1: BondPosition = {
      from: {
        x: start.x - offsetVal,
        y: start.y - perpendicularSlope * offsetVal,
      },
      to: { x: end.x - offsetVal, y: end.y - perpendicularSlope * offsetVal },
    };
    const bond2: BondPosition = {
      from: {
        x: start.x + offsetVal,
        y: start.y + perpendicularSlope * offsetVal,
      },
      to: { x: end.x + offsetVal, y: end.y + perpendicularSlope * offsetVal },
    };
    bonds = [...bonds, bond1, bond2];
  }

  return bonds;
};

export function fixedLengthLine(start: Point, end: Point, length: number) {
  const { x: x1, y: y1 } = start;
  const { x: x2, y: y2 } = end;

  // Calculate the direction vector
  const directionVector: Point = { x: x2 - x1, y: y2 - y1 };

  // Calculate the magnitude of the direction vector
  const dist: number = Math.sqrt(
    directionVector.x ** 2 + directionVector.y ** 2
  );

  // Ensure the magnitude is not zero to avoid division by zero
  if (dist === 0) {
    throw new Error("Start and end points cannot be the same.");
  }

  // Normalize the direction vector to get the unit vector
  const unitVector: Point = {
    x: directionVector.x / dist,
    y: directionVector.y / dist,
  };

  // Scale the unit vector by the desired length
  const scaledVector: Point = {
    x: unitVector.x * length,
    y: unitVector.y * length,
  };

  // Calculate the new end point
  const newEnd: Point = { x: x1 + scaledVector.x, y: y1 + scaledVector.y };
  return newEnd;
}

function getRingVertices(start: Point, center: Point, sides: number) {
  const { x: startX, y: startY } = start;
  const { x: centerX, y: centerY } = center;

  const vertices = [];
  const radius = Math.sqrt(
    Math.pow(startX - centerX, 2) + Math.pow(startY - centerY, 2)
  );
  const initialAngle = Math.atan2(startY - centerY, startX - centerX);
  const angleIncrement = (2 * Math.PI) / sides;

  for (let i = 0; i < sides; i++) {
    const angle = initialAngle + i * angleIncrement;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    vertices.push({ x, y, id: uuid() });
  }

  return vertices;
}

export function drawRing(start: Point, end: Point, sides: number) {
  const vertices = getRingVertices(start, end, sides);
  const edages = [];
  for (let i = 0; i < vertices.length; i++) {
    const from = vertices[i].id;
    const to = i === vertices.length - 1 ? vertices[0].id : vertices[i + 1].id;
    const newEdge = {
      from,
      to,
      bondType: i % 2 === 0 ? BondType.Single : BondType.Double,
    };
    edages.push(newEdge);
  }

  return { ringNodes: vertices, ringBonds: edages };
}
