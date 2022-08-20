import { useArrowNavigationGroup } from "@fluentui/react-tabster";
import * as React from "react";
import { Grid } from "./Grid";

export const Content = () => {
  const arrowKeyNavigationAttributes = useArrowNavigationGroup({
    axis: "grid",
    tabbable: false,
    memorizeCurrent: true,
  });
  return (
    <>
      {/* this button is important */}
      <button>button outside of grid</button>
      {/* this div is important */}
      <div>
        <Grid {...arrowKeyNavigationAttributes} role='menu' columns={3}>
          {new Array(9).fill(0).map((i, idx) => (
            <button key={idx}>{`grid-item-${idx}`}</button>
          ))}
        </Grid>
      </div>
    </>
  );
};

export const Default = () => {
  return (
    <div data-tabster={'{"uncontrolled": {}}'}>
      <Content />
    </div>
  );
};
