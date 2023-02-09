class homePage {
    // consider using string locator instead of cy.get()
    elements = {
        logo: () => cy.get("#gh-logo")
    }

    // should make isVisible() a reusable function that
    // pass in locator as a param
    logoIsVisible() {
        this.elements.logo().should('be.visible')
    }
}

module.exports = new homePage();
