import { Clase6Page } from './app.po';

describe('clase6 App', () => {
  let page: Clase6Page;

  beforeEach(() => {
    page = new Clase6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
