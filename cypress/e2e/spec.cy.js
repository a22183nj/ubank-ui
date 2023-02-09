import homePage from '../pages/homePage'

describe('logo visibility', () => {
  it('passes', () => {
    cy.visit('https://www.ebay.com.au')
    homePage.logoIsVisible()
  })
})
