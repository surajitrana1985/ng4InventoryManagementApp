import { Ng4InventoryManagementAppPage } from './app.po';

describe('ng4-inventory-management-app App', () => {
  let page: Ng4InventoryManagementAppPage;

  beforeEach(() => {
    page = new Ng4InventoryManagementAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
