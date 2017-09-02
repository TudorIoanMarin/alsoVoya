import { AlsoVoyaHybridPage } from './app.po';

describe('also-voya-hybrid App', () => {
  let page: AlsoVoyaHybridPage;

  beforeEach(() => {
    page = new AlsoVoyaHybridPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
