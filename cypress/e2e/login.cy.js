describe("Тесты с вебинара", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Правильный логин", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  it("Пустое имя пользователя", () => {
    cy.login(null, "test");
    cy.validation("#mail");
  });

  it("Пустой пароль", () => {
    cy.login("test@test.com", null);
    cy.validation("#pass");
  });
});
