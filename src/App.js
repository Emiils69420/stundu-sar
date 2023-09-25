// Define the data for each day
var scheduleData = {
  Pirmdiena: [
    ['Sistemu programmesana', 'Kritins', '203'],
    ['Dabaszinibas', 'Strade lkm', '210']
  ],
  Otrdiena: [
    ['Sistemu programmesana', 'Kritins', '203'],
    ['Dabaszinibas', 'Strade lkm', '210']
  ],
  Tresdiena: [
    ['Sistemu programmesana', 'Kritins', '203'],
    ['Patstavigais darbs', 'Patstavigi', '0']
  ],
  Ceturtdiena: [
    ['Sistemu programmesana', 'Kritins', '203'],
    ['Patstavigais darbs', 'Patstavigi', '0']
  ],
  Piektdiena: [
    ['Sistemu programmesana', 'Kritins', '203'],
    ['Patstavigais darbs', 'Patstavigi', '0']
  ]
};

// Function to create a table row
function createTableRow(table, data) {
  var row = table.insertRow();
  for (var i = 0; i < data.length; i++) {
    var cell = row.insertCell(i);
    cell.textContent = data[i];
  }
}

// Function to create a table for a specific day
function createTable(day, data) {
  var table = document.createElement('table');
  table.style.width = '100%';

  var headerRow = table.createTHead().insertRow();
  var headers = ['Stundas', 'Skolotaja', 'Kabinets'];

  for (var i = 0; i < headers.length; i++) {
    var th = document.createElement('th');
    th.textContent = headers[i];
    headerRow.appendChild(th);
  }

  for (var i = 0; i < data.length; i++) {
    createTableRow(table, data[i]);
  }

  var dayHeader = document.createElement('h4');
  dayHeader.textContent = day;
  document.body.appendChild(dayHeader);
  document.body.appendChild(table);
}

// Create tables for each day using the data
for (var day in scheduleData) {
  createTable(day, scheduleData[day]);
}
