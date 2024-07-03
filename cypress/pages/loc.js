const locators = {
  userName: '[name="username"]',
  password: '[name="password"]',
  submitBtn: '[type="submit"]',
  menuItem: ".oxd-main-menu-item",
  inputField: '[class="oxd-form"] input',
  selectDropDown: ".oxd-select-text",
  options: '[role="listbox"].oxd-select-dropdown',
  autoSuggestion: '[role="listbox"].oxd-autocomplete-dropdown',
  recordFound: ".orangehrm-paper-container span.oxd-text.oxd-text--span",
  recordInTable: ".oxd-table-card .oxd-table-row.oxd-table-row--with-border",
  sortIconButton: ".oxd-table-header-sort",
  deleteModelPopup: ".orangehrm-modal-header > .oxd-text",
  deleteYesButton: ".oxd-button--label-danger",
};

export default {
  getLocator(field) {
    return cy.get(locators[field]);
  },
  containsLocatorWithText(field, text) {
    return cy.contains(locators[field], text).eq(0);
  },
};
