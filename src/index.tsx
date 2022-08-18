import * as ReactDOM from "react-dom";
import {
  Provider as V0Provider,
  teamsV2Theme,
} from "@fluentui/react-northstar";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { PortalCompatProvider } from "@fluentui/react-portal-compat";
import { Default as Example } from "./App";

ReactDOM.render(
  <FluentProvider theme={teamsLightTheme}>
    <PortalCompatProvider>
      <V0Provider theme={teamsV2Theme}>
        <Example />
      </V0Provider>
    </PortalCompatProvider>
  </FluentProvider>,
  document.getElementById("root")
);
