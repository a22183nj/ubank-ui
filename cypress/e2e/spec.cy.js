import homePage from '../pages/homePage'

describe('click search button', () => {
  it('passes', () => {
    cy.visit('https://www.ebay.com.au')
    homePage.logoIsVisible()
  })
})
