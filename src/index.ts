/**
 * Function called when the spreadsheet is opened.
 * It creates a custom menu in the UI with an option to open a dialog.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onOpen(): void {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Menu').addItem('Open Dialog', openDialog.name).addToUi();
}

/**
 * Opens a dialog box.
 */
function openDialog(): void {
  const html = HtmlService.createHtmlOutput('<p>Hello</p>');
  SpreadsheetApp.getUi().showModalDialog(html, 'Hello');
}
