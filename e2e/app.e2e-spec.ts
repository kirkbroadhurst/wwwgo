import { WwwgoPage } from './app.po';

describe('wwwgo App', () => {
  let page: WwwgoPage;

  beforeEach(() => {
    page = new WwwgoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
