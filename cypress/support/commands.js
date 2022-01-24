// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import 'cypress-localstorage-commands';

Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8080/#/authForDev',
    body: {
      user: {
        id: 'jekim',
        password: 'cbdldRja3$',
      },
    },
    failOnStatusCode: false,
  })
    .then((resp) => {
      console.log(resp);
      cy.setLocalStorage('capi.token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNSIsImp0aSI6ImY1NjU3MGQ1NmRkZDg0NjNjY2I1MWJjNmViYTBlYjAyMjY0Y2NhNjAxMDRlMGM4ZjNiYmMxNThhMGYyNTZkODBhZTA4YjYyMzJhOGRhNzA1IiwiaWF0IjoxNjQzMDAwOTUzLjk0NDcyMSwibmJmIjoxNjQzMDAwOTUzLjk0NDcyNSwiZXhwIjoxNjc0NTM2OTUzLjg4MTkxOCwic3ViIjoiMTQyMSIsInNjb3BlcyI6WyIqIl19.AbN5LVDIIwZ4gTD--z6EleKDJ_uspIEsist_PHhP8rc3dRWGK6DuG12gp4bQhTKQaPHN7IWHaQK0M3czqn9ZAgXmIH66OAWTRI5QrhftQL9xajN8OS6o1swPltVjad90WvyTE8smxRJmpLHlY1eGt5Isms-vpiJjjaF2-Ux8A4W14-k633BwfzX1MqoFRxYX0QygAJFLo6ekC4A1oVcnrCBxH9G5RfEBp6TQG3YVdrVVDH3DH2VNaHWtm9LWWE-26urP2DfIs4lwX0qE1L-XLz-MjXtIZqTOs1dSHLlWZXGef5tBZFNoSqk3TUb2GFk86BfFNPoa6g5knIiL49PPj1wDwgCWiC8KxulGePQavdjWZyKzVnbzWcFVEPM5l4BalovBB0MnPKQVPmg0e8ww_xLf4OokPZLag_6dAZCTnHEug9Dq0hiVqa9W2c6lSoBpkzbPYg6T9zalhC-KxzWO_MOMQNI6m3n6DDG5bblkmMCwovb4YS666J1c8M9Eafqu8VxeZuOBzUa_baEVvaU7jdbSZmjwlRkqb6la7wvU6v5oxe68Nedho6Gye8bQrWZIOGlOyLyCnpptX5-8CGe4gxKdWBpcJIAOoiGRwaNCWG-LD4SyJB-38WyclysT5Su7aq7PF9GFMF7wTiY5rBfNj3cZ47m3d2gX-_GpxMIjdKA');
      cy.setLocalStorage('capi.user', '{"username":"jekim","name":"sellmate_jekim","사용등급":"1","su":true}')
    });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
