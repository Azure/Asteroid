import { mergeStyleSets } from "@fluentui/merge-styles"
import { FontSizes, Toggle } from "@fluentui/react"
import { ToggleButton } from "./ToggleMode"

// Title Bar
export function TitleBar() {

    const titleClass = mergeStyleSets({ "display": "inline-block", "marginLeft": "10px", "verticalAlign": "top" })

    return (
        <nav role="menubar">
            <div style={{ width: "100%" }}>
                <div style={{ display: "inline-block", padding: "11px 12px 0px", fontSize: FontSizes.size28 }}>
                    Asteroid Tool
                </div>
                <ToggleButton />
            </div>
        </nav>
    )
}

