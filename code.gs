function onEdit(e) {
  var oldValue;
  var newValue;
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var activeCell = ss.getActiveCell();
  var sheetName = ss.getActiveSheet().getName();
  var column = activeCell.getColumn();
  if ((column == 3 || column == 4) &&
      (sheetName == "Pipeline")) {
    newValue = e.value;
    oldValue = e.oldValue;
    if (!e.value) {
      activeCell.setValue("");
    } 
    else {
      if (!e.oldValue) {
        activeCell.setValue(newValue);
      }
      else {
        activeCell.setValue(oldValue + ', ' + newValue);
      }
    }
  }
}
