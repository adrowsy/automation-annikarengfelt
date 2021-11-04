/// <reference types="cypress" />

// Elements
const valueInput = ':nth-child(1) > input'
const paidInput = '.checkbox'
const saveBtn = 'a.btn:nth-child(2)'

// Actions

function createNew(value, paid) {
    cy.contains('.btn', 'create bill', { matchCase: false }).click()
    cy.contains('h2', 'new bill', { matchCase: false })

    cy.contains('label', 'value', { matchCase: false })
    cy.get(':nth-child(1) > input').type(value)
    cy.contains('label', 'paid', { matchCase: false })
    if (paid) {
        cy.get(paidInput).click()
    }

    cy.get(saveBtn).click()
}


// Exports
module.exports = {
    createNew
}