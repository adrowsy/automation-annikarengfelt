/// <reference types="cypress" />

// Elements
const starInput = ':nth-child(1) > input'
const endInput = ':nth-child(2) > input'
const clientInput = ':nth-child(3) > select'
const roomInput = ':nth-child(4) > select'
const billInput = ':nth-child(5) > select'
const saveBtn = 'a.btn:nth-child(2)'

// Actions

function createNew(start, end, client, room, bill) {
    cy.contains('.btn', 'create reservation', { matchCase: false }).click()
    cy.contains('h2', 'new reservation', { matchCase: false })

    // Set start and end dates
    cy.contains('label', 'start', { matchCase: false })
    cy.get(starInput).type(start)
    cy.contains('label', 'end', { matchCase: false })
    cy.get(endInput).type(end)

    // Select client
    cy.contains('label', 'client', { matchCase: false })
    cy.get(clientInput).select(client)

    // Select room
    cy.contains('label', 'room', { matchCase: false })
    cy.get(roomInput).select(room)

    // Select bill
    cy.contains('label', 'bill', { matchCase: false })
    cy.get(billInput).select(bill)

    // Save new
    cy.get(saveBtn).click()
}


// Exports
module.exports = {
    createNew
}