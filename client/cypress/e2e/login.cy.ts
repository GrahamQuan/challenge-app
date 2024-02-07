describe('test login page', () => {
  it('worng email and worng password', () => {
    cy.visit('/');
    const wrongEamil = 'wrongEamil@test';
    const worongPassword = '1';
    cy.get('input[type="email"]').type(wrongEamil);
    cy.get('input[type="password"]').type(worongPassword);
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain', 'Invalid email format');
    cy.get('p').should('contain', 'Password at least 8 characters');
  });

  it('right email and right password', () => {
    cy.visit('/');
    const wrongEamil = 'graham@email.com';
    const worongPassword = 'password';
    cy.get('input[type="email"]').type(wrongEamil);
    cy.get('input[type="password"]').type(worongPassword);
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Success to login!');
    });
  });
});
