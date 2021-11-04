/// <reference types="cypress" />
import * as login from '../pages/loginPage'
import * as dashboard from '../pages/dashboardPage'
import * as rooms from '../pages/roomsPage'
import * as clients from '../pages/clientsPage'
import * as bills from '../pages/billsPage'
import * as reservations from '../pages/reservationsPage'

// To filter test runs, use .only or .skip as apendix to the function
// - https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Excluding-and-Including-Tests

// Pre-conditions: 
// System is up and available at localhost:3000

// Test data is set in every test case

beforeEach(() => {
    cy.visit('/') // baseUrl set in cypress.json
    cy.title().should('include', 'Hotel')
    login.performCorrectLogin() //username and password is stored in loginPage.js    
})

afterEach(() => {
    dashboard.logout()
    cy.contains('Login')
})


describe('Tests basic functionality of dashboard and linked pages', function () {

    it('Links from dashboard', function () {

        dashboard.viewRooms()
        dashboard.backToDashboard()

        dashboard.viewClients()
        dashboard.backToDashboard()

        dashboard.viewBills()
        dashboard.backToDashboard()

        dashboard.viewReservations()
        dashboard.backToDashboard()

    })

    it('Create a new room', function () {

        let category = 0
        let roomNumber = 301
        let floor = 3
        let available = true
        let price = 999
        let features = [0, 2]

        dashboard.viewRooms()
        rooms.createNew(category, roomNumber, floor, available, price, features)
        cy.contains('.card', roomNumber)
        dashboard.backToDashboard()

    })


    it('Creates a new client', function () {

        let name = 'Tester Client'
        let email = 'tester@client.com'
        let tel = '070-111 22 33'

        dashboard.viewClients()
        clients.createNew(name, email, tel)
        cy.contains('.card', name)
        dashboard.backToDashboard()

    })


    it('Creates a new bill', function () {

        let value = 999
        let paid = false

        dashboard.viewBills()
        bills.createNew(value, paid)
        cy.contains('.card', value)
        dashboard.backToDashboard()

    })

    it('Creates a new reservation', function () {

        let start = '2021-11-01'
        let end = '2021-11-02'
        let client = 2
        let room = 2
        let bill = 1

        dashboard.viewReservations()
        reservations.createNew(start, end, client, room, bill)
        cy.contains('.card', start, end)
        dashboard.backToDashboard()

    })

})