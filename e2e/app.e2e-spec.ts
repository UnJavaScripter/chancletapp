import { ChancletappPage } from './app.po';

describe('chancletapp App', () => {
  let page: ChancletappPage;

  beforeEach(() => {
    page = new ChancletappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
