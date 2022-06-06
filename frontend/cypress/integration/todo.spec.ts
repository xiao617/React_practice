

describe('My First Test', () => {
    beforeEach(()=>{
    })
    afterEach(()=>{
    })
    it('Visits todo page', () => {
        cy.visit('/todo')
        
        
    })
    it('Header Bar',()=>{
        cy.visit('/todo')
        cy.contains('Home').click()
        cy.contains('Todo').click()
    })
    it("create todo",()=>{
        cy.visit('/todo')
        cy.get('[data-cy=todoInput]').type('Testing').should('have.value','Testing')
        cy.get('[data-cy=todoSubmit]').click().then(()=>{
            cy.get('[data-cy=cardTitle]').should('have.length',2)
            cy.get('[data-cy=cardTitle]').last().within(()=>{
                cy.contains('Testing')
            })
        })
        
        // cy.get('[data-cy=todoSubmit]').click()
        // cy.wait(3000)
        // // cy.get('[data-cy=cardTitle]').last()
        // // cy.get('[data-cy=cardTitle]').last().debug()
        // cy.get('[data-cy=cardTitle]').should('have.length',2)
        // cy.get('[data-cy=cardTitle]').last().within(()=>{
        //     cy.contains('Testing')
        // })
    })
})