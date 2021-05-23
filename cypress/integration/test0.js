describe('about page: ', () => {

    it('check to see if navbar works for About section', () => {
        cy.visit('http://localhost:3000/')

        cy.contains('About').click()

        cy.url().should('include', '/AboutPage')
    })

    it('check to see if Anas\'s profile works', () => {
        cy.contains('Anas Nahil').click()
        cy.contains('GitHub').should('have.attr', 'href').should('include', 'https://github.com/itsanasna')
    })

    it('check to see if Joshua\'s profile works', () => {
        cy.contains('Joshua Mendez').click()
        cy.get('.Joshua > div > a[href="https://github.com/joshuafmendez"]')
    })

    it('check to see if Shoaib Dar\'s profile works', () => {
        cy.contains('Shoaib Dar').click()
        cy.get('.Shoaib > div > a[href="https://www.linkedin.com/in/shoaib-dar/"]')
    })
})

describe('Home Page: ', () => {
    it('check to see if navbar works for Home section', () => {
        cy.visit('http://localhost:3000/')

        cy.contains('Home').click()

        cy.url().should('include', '/')
    })

    it('check to see if empty Search works', () => {
        cy.contains('Search').click()
        cy.contains('No Search Results Yet!')
    })

})