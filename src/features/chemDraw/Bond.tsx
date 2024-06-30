import React from "react";
import { Group, Line } from "react-konva";
import { BondType, updateBond } from "./utils/bond";

type Props = {
  to: { x: number; y: number };
  from: { x: number; y: number };
  bondType?: BondType;
  id: string;
};

export default function Bond({ to, from, bondType, id }: Props) {
  const bonds = updateBond(from, to, bondType);
  return (
    <Group key={id}>
      {bonds.map((b, index) => {
        return (
          <Line
            key={index}
            points={[b.from.x, b.from.y, b.to.x, b.to.y]}
            stroke="black"
          />
        );
      })}
    </Group>
  );
}
