/// <reference types="cypress" />

// Elements
const pageheader = 'Login'
const usernameInput = 'div.field:nth-child(1) > input:nth-child(2)'
const passwordInput = 'div.field:nth-child(2) > input:nth-child(2)'
const loginBtn = '.btn'
const username = 'tester01'
const password = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c'

// Actions
function performCorrectLogin() {
    cy.contains('h2', pageheader)
    cy.get(usernameInput).type(username)
    cy.get(passwordInput).type(password)
    cy.get(loginBtn).click()

    // User is logged in and redirected to Tester Hotel Overview
    cy.contains(username)
}

// Exports
module.exports = {
    performCorrectLogin
}