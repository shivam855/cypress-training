declare namespace Cypress {
    interface Chainable<Subject> {
        runBackstop(action: any, url: any): Chainable<any>
        Login(url: any, user: any, pass: any): Chainable<any>
  }
}