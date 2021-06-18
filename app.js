// var PHOTO = document.getElementsByClassName("photo")[0];
// var PHOTO_LENGTH = Math.min(PHOTO.offsetWidth, PHOTO.offsetHeight);
// PHOTO.style.width = PHOTO_LENGTH + "px";
// PHOTO.style.height = PHOTO_LENGTH + "px";
var _body = document.getElementsByTagName("body")[0];
var _contentInfoWrap = document.getElementsByClassName("content-info__wrap");
var _contentInfoWrapHeight = _contentInfoWrap[0].offsetHeight + "px";
var _contentInfoWrapLength = _contentInfoWrap.length;
var El, i;

for (i = 0; i < _contentInfoWrapLength; i += 1) {
  _contentInfoWrap[i].style.lineHeight = _contentInfoWrapHeight;
}
