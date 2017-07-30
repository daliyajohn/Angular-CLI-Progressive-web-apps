import { MyPwaPage } from './app.po';

describe('my-pwa App', () => {
  let page: MyPwaPage;

  beforeEach(() => {
    page = new MyPwaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
