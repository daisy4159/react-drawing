import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Actions } from "../navigations/model";
import { GiArrowCursor } from "react-icons/gi";
import { BsPencil } from "react-icons/bs";
import { FaRegCircle, FaLongArrowAltRight } from "react-icons/fa";
import { RiRectangleLine } from "react-icons/ri";
type DrawingMenuProps = {
  action: Actions;
  setAction: (action: Actions) => void;
  fillColor: string;
  setFillColor: (color: string) => void;
};
export function DrawingMenu({
  action,
  setAction,
  fillColor,
  setFillColor,
}: DrawingMenuProps) {
  const handleActionChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    console.log("newValue==", newValue);
  };

  return (
    <ToggleButtonGroup value={action} exclusive onChange={handleActionChange}>
      <ToggleButton
        value={Actions.SELECT}
        className={
          action === Actions.SELECT ? "bg-violet-300" : " hover:bg-violet-100"
        }
        onClick={() => setAction(Actions.SELECT)}
      >
        <GiArrowCursor size="2rem" />
      </ToggleButton>
      <ToggleButton
        value={Actions.RECTANGLE}
        className={
          action === Actions.RECTANGLE
            ? "bg-violet-300"
            : " hover:bg-violet-100"
        }
        onClick={() => setAction(Actions.RECTANGLE)}
      >
        <RiRectangleLine size="2rem" />
      </ToggleButton>
      <ToggleButton
        value={Actions.CIRCLE}
        className={
          action === Actions.CIRCLE ? "bg-violet-300" : " hover:bg-violet-100"
        }
        onClick={() => setAction(Actions.CIRCLE)}
      >
        <FaRegCircle size="2rem" />
      </ToggleButton>
      <ToggleButton
        value={Actions.SCRIBBLE}
        className={
          action === Actions.SCRIBBLE ? "bg-violet-300" : " hover:bg-violet-100"
        }
        onClick={() => setAction(Actions.SCRIBBLE)}
      >
        <BsPencil size="2rem" />
      </ToggleButton>
      <ToggleButton
        value={Actions.ARROW}
        className={
          action === Actions.ARROW ? "bg-violet-300" : " hover:bg-violet-100"
        }
        onClick={() => setAction(Actions.ARROW)}
      >
        <FaLongArrowAltRight size="2rem" />
      </ToggleButton>
      <Button variant="outlined">
        <input
          className="w-8 h-8"
          type="color"
          value={fillColor}
          onChange={(e) => setFillColor(e.target.value)}
        />
      </Button>
    </ToggleButtonGroup>
  );
}
