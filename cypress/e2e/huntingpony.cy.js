describe('Проверка функционала оформления заказа', function () {
   it('Добавление двух товаров в корзину', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="3"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="339731548"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
 		cy.get('.add-cart-counter__btn').click();
 		cy.get('[data-add-cart-counter-plus=""]').click();
 		cy.wait(1000)
 		cy.get('.header__control-text').click();
 		cy.get('.total-products > :nth-child(1)').contains('Товары (2)').should('be.visible');
 		cy.get('.cart-controls > .button').click();
 		cy.get('.decorated-title').contains('Оформление заказа').should('be.visible');
	})
})