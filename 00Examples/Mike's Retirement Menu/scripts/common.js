/* Common JavaScript */
var DecChars = "0123456789";
var HexChars = "0123456789ABCDEF";
var arrMonthLongName = new Array(13);
    arrMonthLongName[1]="January";    arrMonthLongName[2]="February";    arrMonthLongName[3]="March";
    arrMonthLongName[4]="April";    arrMonthLongName[5]="May";    arrMonthLongName[6]="June";
    arrMonthLongName[7]="July";    arrMonthLongName[8]="August";    arrMonthLongName[9]="September";
    arrMonthLongName[10]="October";    arrMonthLongName[11]="November";    arrMonthLongName[12]="December";
var arrMonthShortName=new Array(13);
    arrMonthShortName[1]="Jan";    arrMonthShortName[2]="Feb";    arrMonthShortName[3]="Mar";
    arrMonthShortName[4]="Apr";    arrMonthShortName[5]="May";    arrMonthShortName[6]="Jun";
    arrMonthShortName[7]="Jul";    arrMonthShortName[8]="Aug";    arrMonthShortName[9]="Sep";
    arrMonthShortName[10]="Oct";    arrMonthShortName[11]="Nov";    arrMonthShortName[12]="Dec";
var arrDayLongName =new Array(8);
    arrDayLongName[1]="Sunday";    arrDayLongName[2]="Monday";    arrDayLongName[3]="Tuesday";
    arrDayLongName[4]="Wednesday";    arrDayLongName[5]="Thursday";    arrDayLongName[6]="Friday";
    arrDayLongName[7]="Saturday"; 
var arrDayShortName = new Array(8);
    arrDayShortName[1]="Sun";    arrDayShortName[2]="Mon";    arrDayShortName[3]="Tue";
    arrDayShortName[4]="Wed";    arrDayShortName[5]="Thu";    arrDayShortName[6]="Fri";
    arrDayShortName[7]="Sat"; 

function About() {
// Call example: <input type="button" name="About1" value="©1998" 
// onclick="about()">
  alert("Your copyright information goes here.");
}

function AddQuotes( str ) {
   return '"' + str.replace( /\"/g, "&quot;" ) + '"';
}

function ClosePage() {
  self.close();
}

function DateGrammar(day) {
  var grammar = "";
  if (day==1 || day==21 || day==31) {grammar="st"}
    else if (day==2 || day==22) {grammar="nd"}
    else if (day==3 || day==23) {grammar="rd"}
    else {grammar="th"}
  return grammar
}
	
function Dec2Hex (Dec) {
  var a = Dec % 16;
  var b = (Dec - a)/16;
  hex = "" + HexChars.charAt(b) + HexChars.charAt(a);
  return hex;
}

function Delay(ms) {
  var later = new Date().getTime()+ms;
  var now = new Date().getTime();
  while( now < later) {
    now = new Date().getTime();
  }
  return;
}

function DispDate() {
  var time = new Date();
  var lmonth = arrMonthLongName[time.getMonth() + 1];
  var lday = arrDayLongName[time.getDay() + 1];
  var date= time.getDate() + DateGrammar(time.getDate()); 
  var year=time.getYear();
  if (year < 2000)    // Y2K Fix
    year = year + 1900; 
// Set date format here:
    return (lday + " the " + date + " of " + lmonth + " in " + year); 
}

function Dollarize (expr) {
// turn incoming expression into a dollar value
  return "$" + formatNumber (expr,2)
}

function EraseStatus() {
   window.status = ''
}

function errorPopup (sMsg) {
// Show an error given a message
  alert (sMsg);
}

function FixBackSlashes(path) {
  path = stringReplace(path, "\\", "/");
  return path;
}

function FormatTime(totalSeconds) {
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds - (minutes * 60);
  return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
}

function GoURL(url) {
  opener.location.href = url;
}

function HexColor(i) {
// Convert Integer color value to Hex
  hexa = new makeArray(16);
  for(var i = 0; i < 10; i++) hexa[i] = i;
  hexa[10]="a"; hexa[11]="b"; hexa[12]="c";
  hexa[13]="d"; hexa[14]="e"; hexa[15]="f";
 if (i < 0) return "00";
   else if (i >255) return "ff";
 else return "" + hexa[Math.floor(i/16)] + hexa[i%16];
}

function isAlpha(ch) {
// returns true if ch is a letter
  if ( (ch < "a" || "z" < ch) && (ch < "A" || "Z" < ch) )
    return false;
  else
    return true;
}

function isAlphaNumeric(i) {
  return ((i >= '0' && i <= '9') || (i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z'));
}

function isAlphaNumericSpecial(i) {  
  return ((i >= '0' && i <= '9') || (i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z') || (i == '!') 
         || (i == '?') || (i == '.') || (i == ' ') || (i == '"') || (i == '\'') || (i == '-'));
}

function isArray (object) {
// returns true if the object is an array?
  if (!window.Array)  // js1.0 has no Arrays
    return false;
  else
    return object.constructor == window.Array;
}

function isDigit(ch) {
// returns true if ch is a digit
  if (ch < "0" || "9" < ch)
    return false;
  else
    return true;
}

function isDigit(i) {
  return (i >= 0 && i <= 9);
  
}

function isEmpty(s) {
  return ((s == null) || (s.length == 0))
}

function isIEBrowser() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident/');
  if (msie > 0) {
// IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }
  if (trident > 0) {
// IE 11 (or newer) => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }
// other browser
  return false;      
}

function isInteger (s) {   var i;
    if (isEmpty(s)) 
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);
    for (i = 0; i < s.length; i++)
    {          
        var c = s.charAt(i);
        if (!isDigit(c)) return false;
    }
    return true;
}

function isLetter(i) {  
  return ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z'));
 
}

function isPhoneNum (s) {
  if (isEmpty(s)) 
       if (isPhoneNum.arguments.length == 1) return false;
       else return (isPhoneNum.arguments[1] == true);
    return (isInteger(s) && s.length == numAllowed)
}

function isPositiveNumber(inputVal) {
  var oneDecimal = false;
  inputStr = inputVal.toString();
  for (var i = 0; i < inputStr.length; i++) {
    var oneChar = inputStr.charAt(i);
    if (oneChar == "." && !oneDecimal) {
      oneDecimal = true;
      continue;
    }
    if (oneChar < "0" || oneChar > "9") {
      return false;
    }
  }
  return true;
}

function makeArray(n) {
 this.length = n;
 for(var i = 1; i <= n; i++)
 this[i] = 0;
 return this;
}

function MyPrompt(text, value) {
    // Create Internet Explorer application object.
    var objIE = WScript.CreateObject("InternetExplorer.Application");
    objIE.navigate("about:blank");  // Empty HTML document 
    objIE.Visible = 0;              // Keep Internet Explorer invisible.

    while (objIE.Busy) {}           // Important: Wait until Internet 
                                    // Explorer is ready.
	var objTemp = objIE.Document.Script;       // Get scripting object.
    var input = objTemp.prompt(text, value);   // Open prompt window.
    objIE.Quit();                   // Close Internet Explorer object.
    return input;
}

function PostCopyright() { 
var d = new Date();
document.write("<BR>");
document.write("Copyright &copy; 2012 - " + d.getFullYear() + " Michael R. Myers. All rights reserved.");
}

function PostDate() { 
  document.write("Today is: " + DispDate());
  document.write("<BR>Last modified " + document.lastModified);
}

function RandomNumber(maxvalue) {
  var randscript=-1;
  while (randscript < 0 || randscript > maxvalue || isNaN(randscript))
    randscript=parseInt(Math.random()*(maxvalue));
  return (randscript+1);
}

function ReloadPage() {
  window.location.reload()
}

function SetStatus(str) {
  window.status = str
}


