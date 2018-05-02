'use strict';
console.log('初始化rem');
var doc = window.document;
var docEl = doc.documentElement;
var tid;
function refreshRem() {
  var width = docEl.getBoundingClientRect().width;
  var rem = width / 7.2;
  docEl.style.fontSize = rem + 'px';
}
window.addEventListener('resize', function () {
  clearTimeout(tid);
  tid = setTimeout(refreshRem, 0);
}, false);
window.addEventListener('pageshow', function (e) {
  if (e.persisted) {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 0);
  }
}, false);

refreshRem();
