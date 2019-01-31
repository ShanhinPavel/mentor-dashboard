const XLSX = require('xlsx');
const path = require('path');
/*
  *This function takes filename, opens excel file,
  *each row with some data transforms into a json's object
  *which is placed to array of json's objects and then it is returned
*/
function getWorkbook(filename, sheetNumber) {
  // make path to file
  const pathToExelFile = path.join('src', 'gettingData', 'load_files', filename);
  // Read file xlsx
  const workbook = XLSX.readFile(pathToExelFile);
  // Get sheet number 0
  const sheetName = workbook.SheetNames[sheetNumber];
  // Get worksheet number 0
  const worksheet = workbook.Sheets[sheetName];
  // Parse sheet to json
  const arrayOfJsonObjects = XLSX.utils.sheet_to_json(worksheet, { raw: true });

  return arrayOfJsonObjects;
}

module.exports = getWorkbook;
