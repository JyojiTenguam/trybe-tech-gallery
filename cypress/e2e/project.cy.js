const TOP_BAR_SELECTOR = '.header-container';
const TRYBETECH_LOGO_SELECTOR = 'img.header-img';
const TRYBETECH_HEADER_TITLE = 'h1.header-title';
const TRYBETECH_LOGIN_SELECTOR = 'a.header-login';
const TEXT_SECTION = 'section.text-section';
const GALLERY_SECTION = 'section.gallery';
const GALLERY_SECTION_CARD = 'section.gallery-card';
const FOOTER_SELECTOR = '.footer-container';
const INSTAGRAM_LOGO = 'img.social-instagram';
const LINKEDIN_LOGO = 'img.social-linkedin';

before(() => {
  cy.configureLayoutInspector({
    excludePadding: true,
    threshold: 5,
  });
});

describe('Trybe Tech-Gallery', () => {
  beforeEach(() => {
    cy.visit('./index.html');
  });

  describe('1 - Crie um cabeçalho para sua aplicação utilizando a tag `header`', () => {
    it('O cabeçalho possui a classe `header-container`', () => {
      cy.get(TOP_BAR_SELECTOR).should('exist');
    });

    it('O cabeçalho é um elemento flex container', () => {
      cy.get(TOP_BAR_SELECTOR).should('have.css', 'display', 'flex');
    });

    it('O cabeçalho possui exatamente três elementos filhos', () => {
      cy.get(TOP_BAR_SELECTOR).children().should('have.length', 3);
    });

    it('Existe um elemento img com a classe `header-img`', () => {
      cy.get(TRYBETECH_LOGO_SELECTOR).should('exist');
    });

    it('Existe um elemento h1 com a classe `header-title`', () => {
      cy.get(TRYBETECH_HEADER_TITLE).should('exist');
    });

    it('Existe um elemento a com a classe `header-login`', () => {
      cy.get(TRYBETECH_LOGIN_SELECTOR).should('exist');
    });

    it('o titulo está centralizado, ou seja elemento com a classe `header-title` está no meio do cabeçalho', () => {
      cy.get(TOP_BAR_SELECTOR).children().eq(1).should('match', TRYBETECH_HEADER_TITLE);
    });
  });

  describe('2 - Implemente o conteúdo da primeira `section`', () => {
    it('Existe um elemento section com a classe `text-section` na página', () => {
      cy.get(TEXT_SECTION).should('exist');
    });

    it('A section com a classe `text-section` é um elemento flex container', () => {
      cy.get(TEXT_SECTION).should('have.css', 'display', 'flex');
    });

    it('A section deve ter, no mínimo, um elemento de texto', () => {
      cy.get(TEXT_SECTION).children().should('have.length.greaterThan', 0);
    });

    it('O elemento filho é uma tag `p`', () => {
      cy.get(TEXT_SECTION).children().eq(0).should('match', 'p');
    });
  });

  describe('3 - Implemente o conteúdo da segunda `section`', () => {
    it('Existe um elemento section com a classe `gallery` na página', () => {
      cy.get(GALLERY_SECTION).should('exist');
    });

    it('A section com a classe `gallery` é um elemento flex container', () => {
      cy.get(GALLERY_SECTION).should('have.css', 'display', 'flex');
    });

    it('A section tem, no mínimo, seis elementos filhos (cards com imagens e texto)', () => {
      cy.get(GALLERY_SECTION).children().should('have.length.greaterThan', 5);
    });

    it('Cada card é uma section e possui a classe `gallery-card` na página', () => {
      cy.get(GALLERY_SECTION_CARD).should('exist');
    });

    it('Cada card tem uma tag `h4` com o respectivo título', () => {
      cy.get(GALLERY_SECTION_CARD).children().eq(0).should('match', 'h4');
    });

    it('Cada card tem uma tag `img` com a respectiva imagem', () => {
      cy.get(GALLERY_SECTION_CARD).children().eq(1).should('match', 'img');
    });
  });

  describe('4 - Crie um rodapé para sua aplicação utilizando a tag `footer`', () => {
    it('O rodapé possui a classe `footer-container`', () => {
      cy.get(FOOTER_SELECTOR).should('exist');
    });

    it('O rodapé com a classe `footer-container` é um elemento flex container', () => {
      cy.get(FOOTER_SELECTOR).should('have.css', 'display', 'flex');
    });

    it('O rodapé possui, no mínimo, dois elementos filhos', () => {
      cy.get(FOOTER_SELECTOR).children().should('have.length.greaterThan', 1);
    });

    it('O elemento `img` com o logo do instagram tem a classe `social-instagram` e possui o atributo src apontando para `./images/instagram-logo.png`', () => {
      cy.get(INSTAGRAM_LOGO)
        .should('have.attr', 'src')
        .and('match', /images\/instagram-logo\.png/);
    });

    it('O elemento `img` com o logo do linkedin tem a classe `social-linkedin` e possui o atributo src apontando para `./images/linked-in-logo.png`', () => {
      cy.get(LINKEDIN_LOGO)
        .should('have.attr', 'src')
        .and('match', /images\/linked-in-logo\.png/);
    });
  });

});
