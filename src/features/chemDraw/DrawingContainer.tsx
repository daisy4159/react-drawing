import { Box, Card, CardActions, CardContent } from "@mui/material";
import { DrawingPanel } from "./DrawingPanel";
import { DrawingMenu } from "./DrawingMenu";
import { useState } from "react";
import { BondType } from "./utils/bond";

export function DrawingContainer() {
  const [bondType, setBondType] = useState<BondType>(BondType.Single);
  return (
    <Box>
      <Card variant="outlined" sx={{ minHeight: 500 }}>
        <CardContent>
          <DrawingPanel bondType={bondType} />
        </CardContent>
        <CardActions>
          <DrawingMenu action={bondType} setAction={setBondType} />
        </CardActions>
      </Card>
    </Box>
  );
}
