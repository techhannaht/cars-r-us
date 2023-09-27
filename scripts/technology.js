import { getTechnology, setTechnology } from "./database.js"

let technology = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technology = () => {
        
    let html = "<h2>Technology</h2>"
    
        html += '<select id="tech">'
        html += '<option value="0">Select a technology package</option>'
    
        const arrayOfOptions = technology.map( (tech) => {
                return `<option value="${tech.id}">${tech.package}</option>`
            }
        )
    
        html += arrayOfOptions.join("")
        html += "</select>"
        return html
    }
    

       