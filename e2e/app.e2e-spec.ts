import { NgxPatchworkPage } from './app.po';

describe('ngx-patchwork App', () => {
  let page: NgxPatchworkPage;

  beforeEach(() => {
    page = new NgxPatchworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
