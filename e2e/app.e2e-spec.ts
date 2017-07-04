import { Angular2SandBoxPage } from './app.po';

describe('angular2-sand-box App', () => {
  let page: Angular2SandBoxPage;

  beforeEach(() => {
    page = new Angular2SandBoxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
