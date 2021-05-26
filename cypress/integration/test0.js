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

    it('check to see if searching for cats outputs 20 results', () => {
        cy.get('input').type('cats').should('have.value', 'cats');
        cy.contains('Search').click()
        cy.get('.video-thumbnail').should('have.length', 20)
    })

    it('check to see if clicking a video takes you to another page', () => {
        cy.get('[alt="Funny Cats That Will Make You Laugh All Day Long 😂😂"]').click()
    })

})

describe('Video Page: ', () => {
    it('check to see if link has correct URL extension', () => {
        cy.url().should('include', 'http://localhost:3000/videos/0zpS7Zhm2OY')
    })

    it('check to see if typing a comment works', () => {
        cy.get('input[type="text"]').type("Tester").should('have.value', 'Tester');
        cy.get('textarea').type("i like cats").should('have.value',"i like cats");
    })

    it('Check to see if submitting comment works', () => {
        cy.contains('Submit').click()
        cy.get('.name').contains('Tester')
        cy.get('.comment').contains('i like cats')
    })

    it('Check to see if back button works', () => {
        cy.contains('Go Back').click()
        cy.url().should('include', '/')
        cy.get('.video-thumbnail').first().should('have.attr', 'src', 'https://i.ytimg.com/vi/0zpS7Zhm2OY/default.jpg')
 
    })

})

describe('Check to see if comment still exist from before: ', () => {
    it('click on same video, check to see if URL is same', () => {
        cy.get('.video-thumbnail').first().should('have.attr', 'src', 'https://i.ytimg.com/vi/0zpS7Zhm2OY/default.jpg').click()
        cy.url().should('include', 'http://localhost:3000/videos/0zpS7Zhm2OY')
        
    })

    // it('Check to see if comment from before is still there', () => {
    //     cy.get('.name').contains('Tester')
    //     cy.get('.comment').contains('i like cats')
    // })

})