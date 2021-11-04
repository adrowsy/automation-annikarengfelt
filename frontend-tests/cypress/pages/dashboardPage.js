/// <reference types="cypress" />

// Elements
const dashboardHead = 'Overview'
const roomsViewBtn = ':nth-child(1) > .btn'
const clientsViewBtn = '.blocks > :nth-child(2) > .btn'
const billsViewBtn = ':nth-child(3) > .btn'
const reservationsViewBtn = ':nth-child(4) > .btn'

// Actions
function backToDashboard() {
    cy.contains('.btn', 'Back').click()
    cy.contains('h2', dashboardHead)

}

function viewRooms() {
    let name = 'Rooms'
    cy.contains('div.blocks', name)
    cy.get(roomsViewBtn).click()
    cy.contains('h2', name)
}

function viewClients() {
    let name = 'Clients'
    cy.contains('div.blocks', name)
    cy.get(clientsViewBtn).click()
    cy.contains('h2', name)
}

function viewBills() {
    let name = 'Bills'
    cy.contains('div.blocks', name)
    cy.get(billsViewBtn).click()
    cy.contains('h2', name)
}

function viewReservations() {
    let name = 'Reservations'
    cy.contains('div.blocks', name)
    cy.get(reservationsViewBtn).click()
    cy.contains('h2', name)
}

function logout() {
    cy.get('.user > .btn').click()
}

// Exports
module.exports = {
    backToDashboard,
    viewRooms,
    viewClients,
    viewBills,
    viewReservations,
    logout
    
}