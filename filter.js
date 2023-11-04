const filterbtn = $(".screen-filterbtn");
const screenFilter = $(".screen-filter-container");
const screennav = $(".screen-nav");
const containerr = $(".container");

function showscreenFilter() {
  console.log("filteron");
  containerr.css("display", "none");
  screenFilter.css("display", "flex");
  screennav.css("display", "none");
}

function showfilterscreenMenu() {
  console.log("menu on");
  $(".screen-filter-container").css("display", "none");
  containerr.css("display", "flex");
  screennav.css("display", "flex");
}
