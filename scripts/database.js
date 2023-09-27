const database = {
    paintColor: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 700 },
        { id: 3, color: "Firebrick Red", price: 900 },
        { id: 4, color: "Spring Green", price: 1000}
    ],
    interiors: [
        { id: 1, style: "Beige Fabric", price: 405 },
        { id: 2, style: "Charcoal Fabric", price: 782 },
        { id: 3, style: "White Leather", price: 1470 },
        { id: 4, style: "Black Leather", price: 1997 }
    ],
    technology: [
        { id: 1, package: "Basic Package", price: 1242 },
        { id: 2, package: "Navigation Package", price: 7364 },
        { id: 3, package: "Visibility Package", price: 12589 },
        { id: 4, package: "Ultra Package", price: 79545 }
    ],
    wheels: [
        { id: 1, style: "17-Inch Pair Radial", price: 1242 },
        { id: 2, style:"17-Inch Pair Radial", price: 7364 },
        { id: 3, style:"18-Inch Pair Spoke Silver", price: 12589 },
        { id: 4, style: "18-Inch Pair Spoke Black", price: 79545 }
    ],
    customOrders: [
        {
            id: 1 ,
            paintColorId: 2 ,
            interiorId: 3 ,
            technologyId: 4 ,
            wheelId: 5,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: [
        {}
    ]
}

export const getPaintColor = () => {
    return database.paintColor.map(color => ({...color}))
}

export const getInterior = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getWheels= () => {
    return database.wheels.map(wheel => ({...wheel}))
}


export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}