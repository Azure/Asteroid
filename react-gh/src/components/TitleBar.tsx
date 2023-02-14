import { mergeStyleSets } from "@fluentui/merge-styles";
import { FontSizes } from "@fluentui/react";

// Title Bar
export function TitleBar() {
  const titleClass = mergeStyleSets({
    display: "inline-block",
    marginLeft: "10px",
    verticalAlign: "top",
  });

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
