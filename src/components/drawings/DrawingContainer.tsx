import { Box, Card, CardActions, CardContent } from "@mui/material";
import { DrawingPanel } from "./DrawingPanel";
import { DrawingMenu } from "./DrawingMenu";
import { useState } from "react";
import { Actions } from "../navigations/model";
export function DrawingContainer() {
  const [action, setAction] = useState<Actions>(Actions.SELECT);
  const [fillColor, setFillColor] = useState<string>("");
  return (
    <Box>
      <Card variant="outlined" sx={{ minHeight: 500 }}>
        <CardContent>
          <DrawingPanel />
        </CardContent>
        <CardActions>
          <DrawingMenu
            action={action}
            setAction={setAction}
            fillColor={fillColor}
            setFillColor={setFillColor}
          />
        </CardActions>
      </Card>
    </Box>
  );
}
