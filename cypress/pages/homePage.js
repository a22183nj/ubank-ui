class homePage {
    elements = {
        logo: () => cy.get("#gh-logo")
    }

    logoIsVisible() {
        this.elements.logo().should('be.visible')
    }
}

module.exports = new homePage();
