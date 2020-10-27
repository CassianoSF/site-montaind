describe "Login" do
	it 'should login with right credentials' do
		cy.visit('http://localhost:8080/admin')
		cy.get('input[type=email]').type('montaind.comercial@gmail.com')
		cy.get('input[type=password]').type('montaind2020')
		cy.get('.btn').click()