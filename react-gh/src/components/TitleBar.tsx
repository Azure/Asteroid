import { FontSizes } from "@fluentui/react";

export function TitleBar() {
  return (
    <nav role="menubar">
      <div style={{ width: "100%" }}>
        <div style={{ display: "inline-block", fontSize: FontSizes.size28 }}>
          Asteroid (Public Preview)
        </div>
      </div>
    </nav>
  );
}
