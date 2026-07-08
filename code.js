function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('XML Tools')
      .addItem('Export to XML', 'exportToXML')
      .addToUi();
}

function exportToXML() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Products');
  
  if (!sheet) {
    SpreadsheetApp.getUi().alert('Error: Please name your sheet "Products"');
    return;
  }
  
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) {
    SpreadsheetApp.getUi().alert('Error: No data found.');
    return;
  }
  
  var headers = data[0];
  var xml = '<?xml version="1.0" encoding="UTF-8"?>\n<products>\n';
  
  for (var i = 1; i < data.length; i++) {
    xml += '  <product>\n';
    for (var j = 0; j < headers.length; j++) {
      var tagName = headers[j].toString().toLowerCase().replace(/\s+/g, '_');
      var value = data[i][j];
      xml += '    <' + tagName + '>' + value + '</' + tagName + '>\n';
    }
    xml += '  </product>\n';
  }
  xml += '</products>';
  
  var folder = DriveApp.getRootFolder();
  var file = folder.createFile('products_export.xml', xml, MimeType.PLAIN_TEXT);
  
  SpreadsheetApp.getUi().alert('Success! XML exported to your Google Drive root folder as "products_export.xml"');
}
