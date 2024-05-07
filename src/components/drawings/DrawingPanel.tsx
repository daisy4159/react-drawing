import Konva from "konva";
import { KonvaPointerEvent } from "konva/lib/PointerEvents";
import { useRef, useState } from "react";
import { Layer, Stage } from "react-konva";
import { Actions } from "../navigations/model";

export function DrawingPanel() {
  const [action, setAction] = useState<Actions>(Actions.SELECT);
  const stageRef = useRef<Konva.Stage>(null);

  const handlePointerDown = (e: KonvaPointerEvent) => {
    console.log("handlePointer down");
  };
  const handlePointerUp = (e: KonvaPointerEvent) => {
    console.log("handlePointer up");
  };
  const handlePointerMove = (e: KonvaPointerEvent) => {
    console.log("handlePointer move");
  };
  return (
    <Stage
      ref={stageRef}
      width={window.innerWidth / 2}
      height={window.innerHeight / 2}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <Layer></Layer>
    </Stage>
  );
}
