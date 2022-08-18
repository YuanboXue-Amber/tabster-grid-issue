import { Button as V0Button, Popup } from "@fluentui/react-northstar";
import { Button } from "@fluentui/react-components";
import { useArrowNavigationGroup } from "@fluentui/react-tabster";
import * as React from "react";
import { Grid } from "./Grid";

const Content = () => {
  const arrowKeyNavigationAttributes = useArrowNavigationGroup({
    axis: "grid",
    tabbable: false,
    memorizeCurrent: true,
  });
  return (
    <>
      {/* this button is important */}
      <V0Button>V0Button outside of grid</V0Button>
      {/* this div is important */}
      <div>
        <Grid {...arrowKeyNavigationAttributes} role='menu' columns={3}>
          {new Array(9).fill(0).map((i, idx) => (
            <Button key={idx}>{`grid-item-${idx}`}</Button>
          ))}
        </Grid>
      </div>
    </>
  );
};

export const Default = () => {
  return (
    <Popup
      trigger={<V0Button>trigger</V0Button>}
      trapFocus
      content={<Content />}
    />
  );
};
