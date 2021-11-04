/// <reference types="cypress" />

// Elements
const nameInput = ':nth-child(1) > input'
const emailInput = ':nth-child(2) > input'
const telInput = ':nth-child(3) > input'
const saveBtn = 'a.btn:nth-child(2)'

// Actions

function createNew(name, email, tel) {
    cy.contains('.btn', 'create client', { matchCase: false }).click()
    cy.contains('h2', 'new client', { matchCase: false })

    cy.contains('label', 'name', { matchCase: false })
    cy.get(nameInput).type(name)
    cy.contains('label', 'email', { matchCase: false })
    cy.get(emailInput).type(email)
    cy.contains('label', 'tel', { matchCase: false })
    cy.get(telInput).type(tel)

    cy.get(saveBtn).click()
}


// Exports
module.exports = {
    createNew
}