// This is the Common JavaScript Module
var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
// digits.charAt(<Index>)
var reAlpha = /[a-zA-Z]/;
var reAlphaNumeric = /[a-zA-Z0-9\+\-\.]/;
var reNonWhitespace = /\S/;
var ScriptName = "Common.js";
var ScriptVersion = "1.0";

// Conversions
function toHex(n) {}
  var s : s = Hex(n);
  return String(4 - Len(s), "0") & s;
}

// Routines for Windows Apps
function Launch(program){
  (new ActiveXObject('WScript.Shell')).Run(program);void(0);
}

// Routines for Windows OS
function popWindow(url, name){
  var wndPopup = window.open(url,name,"");
// Bring new window to foreground
  if(wndPopup) wndPopup.focus();
}

// String Functions
function capitalize(text) {
// Capitalizes only the first word in the text
  return text.charAt(0).toUpperCase() + text.slice(1);
}
  
// Tests and Checks
var hasDOM = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object';
var isAndroid = /Android/.test(userAgent);
var isAndroidPre3 = /Android\s[0-2][^\d]/.test(userAgent);
var isAndroidPre5 = /Android\s[0-4][^\d]/.test(userAgent);
var isChrome = userAgent.indexOf('Chrom') >= 0;
var isChromeWithRangeBug = /Chrome\/(39|40)\./.test(userAgent);
var isIOSChrome = userAgent.indexOf('CriOS') >= 0;
var isIE = userAgent.indexOf('Trident') >= 0;
var isIOS = /\b(iPad|iPhone|iPod)(?=;)/.test(userAgent);
var isOpera = userAgent.indexOf('Opera') >= 0;
var isSafari = /Safari\//.test(userAgent) && !/(Chrome\/|Android\s)/.test(userAgent);

function isAllWhitespace(str) {
  return !reNonWhitespace.test(str);
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function isBool(v) {
  return typeof v === 'boolean';
}

function isEmptyObj(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

function isFunction(obj) {
  return typeof obj === 'function';
}

function isInt(v) {
  return typeof v === 'number' && (v | 0) === v;
}

function isNum(v) {
  return typeof v === 'number';
} 

function isObject(obj) {
// Returns true if `obj` is object as in {a: 1, b: 2}, 
// function or not if it's arra
  if (isArray(obj)) {
    return false;
  }
  var type = typeof obj;
  return type === 'object' && !!obj;
}

function isSpace(ch) {
  return ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A;
} 

function isStrEqual(str1, str2, ignoreCase) {
  return ignoreCase ? str1.toLowerCase() == str2.toLowerCase() : str1 == str2;
}

function isString(obj) {
  return typeof obj === 'string' || obj instanceof String;
}

function isValidProtocol(url) {
  if (!url) {
    return false;
  }
  switch (url.protocol) {
    case 'http:':
    case 'https:':
    case 'ftp:':
    case 'mailto:':
    case 'tel:':
      return true;
    default:
      return false;
  }
}

