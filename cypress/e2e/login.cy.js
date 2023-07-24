describe('Проверка формы логина и пароля', function () {
   it('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
		cy.clearCookies()
	})
  it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').contains('Восстановите пароль').should('be.visible');
        cy.get('#mailForgot').type('nikita@molchanov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
		cy.clearCookies()
	})
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('ssssss');
		cy.get('#loginButton').click();
		cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
		cy.clearCookies()
	})
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('petya@ivanov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
		cy.clearCookies()
	})
	it('Невалидный логин без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.get('#messageHeader').contains('Нужно исправить проблему валидации').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
		cy.clearCookies()

	})
		it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
		cy.clearCookies()
	})
})