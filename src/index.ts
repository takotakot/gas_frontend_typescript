import { backendFunctions } from './modalDialogBackend';
import { frontendFunctions } from './modalDialogFrontend';

/**
 * Function called when the spreadsheet is opened.
 * It creates a custom menu in the UI with an option to open a dialog.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onOpen(): void {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Menu')
    .addItem('Open Dialog', openDialog.name)
    .addItem('Open HTML Dialog', openHtmlDialog.name)
    .addItem('Open JS Dialog', openJsDialog.name)
    .addToUi();
}

/**
 * Opens a dialog box.
 */
function openDialog(): void {
  const html = HtmlService.createHtmlOutput('<p>Hello</p>');
  SpreadsheetApp.getUi().showModalDialog(html, 'Hello');
}

/**
 * Opens an HTML dialog.
 */
function openHtmlDialog(): void {
  const html = HtmlService.createHtmlOutputFromFile(
    'static/sample-dialog.html'
  );
  SpreadsheetApp.getUi().showModalDialog(html, 'Sample');
}

/**
 * Opens a JavaScript dialog.
 */
function openJsDialog(): void {
  const html = HtmlService.createTemplateFromFile(
    'static/js-dialog.html'
  ).evaluate();
  SpreadsheetApp.getUi().showModalDialog(html, 'JavaScript');
}

/**
 * This function includes the backend and frontend functions.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function dummyIncludeFunction(): void {
  backendFunctions();
  frontendFunctions();
}
