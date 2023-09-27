import { getPaintColor, setPaintColor } from "./database.js"

const colors = getPaintColor()



document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "color") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)

export const PaintColors = () => {
        
        let html = "<h2>Paint Colors</h2>"
        
            html += '<select id="color">'
            html += '<option value="0">Select a paint color package</option>'
        
            const arrayOfOptions = colors.map( (color) => {
                    return `<option value="${color.id}">${color.color}</option>`
                }
            )
        
            html += arrayOfOptions.join("")
            html += "</select>"
            return html
        }
        
      