/// <reference types="cypress" />

// Elements
const categoryInput = 'div.field:nth-child(1) > select:nth-child(2)'
const roomNumberInput = 'div.field:nth-child(2) > input:nth-child(2)'
const floorInput = 'div.field:nth-child(3) > input:nth-child(2)'
const availabilityInput = '.checkbox'
const priceInput = 'div.field:nth-child(5) > input:nth-child(2)'
const featuresInput = 'div.field:nth-child(6) > select'
const saveBtn = 'a.btn:nth-child(2)'


// Actions

function createNew(category, roomNumber, floor, available, price, features) {
    cy.contains('.btn', 'create room', { matchCase: false }).click()
    cy.contains('h2', 'new room', { matchCase: false })

    cy.contains('label', 'category', { matchCase: false })
    cy.get(categoryInput).select(category)

    cy.contains('label', 'number', { matchCase: false })
    cy.get(roomNumberInput).type(roomNumber)

    cy.contains('label', 'floor', { matchCase: false })
    cy.get(floorInput).type(floor)

    cy.contains('label', 'available', { matchCase: false })
    if (available) {
        cy.get(availabilityInput).click()
    }

    cy.contains('label', 'price', { matchCase: false })
    cy.get(priceInput).type(price)

    cy.contains('label', 'features', { matchCase: false })
    cy.get(featuresInput).select(features)

    cy.get(saveBtn).click()
}



// Exports
module.exports = {
    createNew
}