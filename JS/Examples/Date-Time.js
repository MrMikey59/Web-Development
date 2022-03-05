// Script File for Custom Content Modification

// MyConstants
var oneDay = 1000 * 60 * 60 * 24;

function DayofYear () {
// Accounts for DST.
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  var day = Math.floor(diff / oneDay).toString();
  var JulianYear = now.getYear().toString();
  document.write( day );
}

function ShortYear () {
  var Today, sYear;
  Today = new Date();
  sYear = Today.getYear().toString().substr(2,2);
  document.write(sYear);
}

function JulianDate () {
  var JDate, Today;
  Today = new Date();
  JDate = (Today.valueOf()/86400000) + 2440587.5
  document.write(JDate);
}

function fixDay(intDay) {
  var objDay = new Array ("Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday");
  return objDay[intDay];
}

function fixMonth(intMonth) {
  var objMonth = new Array ("January","February","March","April", "May","June","July","August","September","October",
"November", "December");
  return objMonth[intMonth];
}

function fixMinutes(intMinutes) {
  if (intMinutes < 10)
    intMinutes = "0" + intMinutes;
  return intMinutes;
}

function fixHours(intHours) {
  if (intHours > 12)
    intHours = intHours - 12;
  else if (intHours == 0)
    intHours = 12;
  return intHours;
}

function checkAMPM(intHours) {
  if (intHours >= 12)
    return "pm";
  else
    return "am";
}

function StandardDate()  {
  var strDate, AMorPM;
  var objDate = new Date();
  var day = objDate.getDay();
  var month = objDate.getMonth();
  var date = objDate.getDate();
  var hours = objDate.getHours();
  var minutes = objDate.getMinutes();
  day = fixDay(day);
  month = fixMonth(month);
  minutes = fixMinutes(minutes);
  AMorPM = checkAMPM(hours);
  hours = fixHours(hours);
  strDate = day + ", " + month + " " + date + " at " + hours + ":" + minutes  + AMorPM;
  document.write(strDate);
}
