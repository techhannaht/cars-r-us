import { getPaintColor } from "./database.js"
import { getWheels} from "./database.js"
import { getInterior } from "./database.js"
import { getTechnology } from "./database.js"
import { getOrders } from "./database.js"

const colors = getPaintColor()
const wheels = getWheels()
const interiors = getInterior()
const technology = getTechnology()


const buildOrderListItem = (order) => {

    
    const foundColor = colors.find( color => color.id === order.paintColorId)
    const foundInterior = interiors.find( interior => interior.id === order.interiorId)
    const foundTechnology = technology.find( tech => tech.id === order.technologyId)
    const foundWheels = wheels.find( wheel => wheel.id === order.wheelId)

    const colorName = foundColor.color
    const interiorName = foundInterior.style
    const techName = foundTechnology.package
    const totalCost = foundColor.price + foundInterior.price + foundTechnology.price 

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    ${colorName} with ${order.wheelId}, ${interiorName} and the ${techName} for a total of ${costString}
</li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

