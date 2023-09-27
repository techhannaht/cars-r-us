import { getInterior, setInterior } from "./database.js"

let interiors = getInterior()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)


export const Interiors = () => {
        
        let html = "<h2>Interiors</h2>"
        
            html += '<select id="interior">'
            html += '<option value="0">Select an interior package</option>'
        
            const arrayOfOptions = interiors.map( (interior) => {
                    return `<option value="${interior.id}">${interior.style}</option>`
                }
            )
        
            html += arrayOfOptions.join("")
            html += "</select>"
            return html
        }
        