describe("todo test",()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    afterEach(()=>{})
    it("check home",()=>{
        cy.get('h1')
    })
})