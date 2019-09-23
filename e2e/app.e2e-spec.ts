import { SCBFRONTPage } from './app.po';

describe('scb-front App', () => {
  let page: SCBFRONTPage;

  beforeEach(() => {
    page = new SCBFRONTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
