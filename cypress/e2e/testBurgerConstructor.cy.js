import { baseUrl } from '../../src/utils/utils';
describe('The Home Page', () => {
    beforeEach(() => {
        cy.request('GET', `${baseUrl}/api/ingredients`)
            .then((response) => {
                expect(response.body.data).to.have.length(15);
                cy.visit('/');
            })
    });

    it('assembly of burger', () => {
        cy.contains('Лента заказов').click();
        cy.go('back');
        cy.contains('Личный кабинет').click();
        cy.contains('Вход');
        cy.get('form').within(() => {
            cy.get('input[name="email"]').type('kulikovaaliona@mail.ru')
            cy.get('input[name="password"]').type('ghRgf#57')
        }).submit();
        cy.visit('/');
        cy.visit('/Profile');
        cy.contains('Конструктор').click();
        cy.get('div').contains('Флюоресцентная булка R2-D3').click();
        cy.get('#modal_box').find('#modal_close').click();
        cy.get('#drag').trigger('dragstart');
        cy.get('#drop').trigger('drop');
        cy.get('div').contains('Мясо бессмертных моллюсков Protostomia').trigger('dragstart');
        cy.get('#drop').trigger('drop');
        cy.get('div').contains("Соус фирменный Space Sauce").trigger('dragstart');
        cy.get('#drop').trigger('drop');
        cy.get('div').contains("Хрустящие минеральные кольца").trigger('dragstart');
        cy.get('#drop').trigger('drop');
        cy.get('div').contains("Сыр с астероидной плесенью").trigger('dragstart');
        cy.get('#drop').trigger('drop');
        cy.get('div').contains("Мини-салат Экзо-Плантаго").trigger('dragstart');
        cy.get('#drop').trigger('drop');
        cy.get('button').contains('Оформить заказ').click();
        cy.get('button').contains('Оформить заказ').click();
        cy.get('#modal_box').wait(17000).contains('идентификатор заказа');
        cy.get('#modal_close').click();
    });
});