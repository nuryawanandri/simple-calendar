var monthElem = document.getElementById('month')
var yearElem = document.getElementById('year')
var containerElem = document.getElementById('container')

var dateSelect = null

var month = [
  {text: 'Januari', value: 0},
  {text: 'Februari', value: 1},
  {text: 'Maret', value: 2},
  {text: 'April', value: 3},
  {text: 'Mei', value: 4},
  {text: 'Juni', value: 5},
  {text: 'Juli', value: 6},
  {text: 'Agustus', value: 7},
  {text: 'September', value: 8},
  {text: 'Oktober', value: 9},
  {text: 'November', value: 10},
  {text: 'Desember', value: 11},
]
var daysName = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

month.map((month) => {
  renderCalender(month)
})

var dateNow = new Date()
renderCalendar(new Date(dateNow.getFullYear(), dateNow.getMonth()))

function renderCalendar (date) {
  containerElem.innerHTML = ''
  var days = date.getDay()
  var month = date.getMonth()
  var year = date.getFullYear()
  var dateCount = 2 - days
  console.log('month : ', month, year, days, date)
  for (var i = 0; i < 6; i++) {
    var row = document.createElement('div')
    row.setAttribute('class', 'row')
    for (var j = 1; j <= 7; j++) {
      if (i === 0) {
        var cell = document.createElement('div')
        cell.setAttribute('class', 'cell header')
        if (j == 7) {
          cell.textContent = daysName[0]
        } else {
          cell.textContent = daysName[j]
        }
        row.appendChild(cell)
      } else {
        var cell = document.createElement('div')
        var datePrint = new Date(year, month, dateCount)
        console.log('print : ', datePrint, dateCount, datePrint.getDay())
        cell.setAttribute('class', 'cell')
        cell.textContent = datePrint.getDate()
        row.appendChild(cell)
        dateCount++
      }
    }
    containerElem.appendChild(row)
  }
}

function renderCalender (month) {
  var option = document.createElement('option')
  option.textContent = month.text
  option.value = month.value
  monthElem.appendChild(option)
}

function onSelectMonth() {
  var monthValue = monthElem.options[monthElem.selectedIndex].value
  var yearValue = yearElem.value

  dateSelect = new Date(yearValue, monthValue)
  renderCalendar(dateSelect)
}