import { Toggle } from "@fluentui/react";
import React from "react";
import { alertClicked } from "./buttons/AlertClicked";

// Toggle Button at right side of Title Bar
export function ToggleButton() {
    const [checked, setChecked] = React.useState(false);
  
    return (
      <div style={{ display: "inline-flex", float: "right", padding: "11px 12px 0px" }}>
        <Toggle
          defaultChecked={checked}
          onChange={alertClicked}
          onText="Expert Mode"
          offText="User Mode"
        />
      </div>
    );
  }
  
  // Tracks the change of Toggle Button
  function _onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
    console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
  }