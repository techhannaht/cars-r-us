import { PaintColors } from "./paintColor.js"
import { Interiors } from "./interior.js"
import { Wheels } from "./wheels.js"
import { Technology } from "./technology.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder(parseInt(event.target.id))
        }
    }
)
export const CarsRUs = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__color options">
                ${PaintColors()}
            </section>
            <section class="choices__interior options">
                ${Interiors()}
            </section>
            <section class="choices__wheels options">
               ${Wheels()}
            </section>
            <section class="choices__technology options">
               ${Technology()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}